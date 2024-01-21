import fs from "node:fs"
import csv from "csv-parser"
import { NeuralNetwork, utilities } from "brain.js"

const prepareData = (features, target) => {
	const data = []
	for (let i = 0; i < features.length; i++) data.push({input: features[i], output: target[i]})
	return data
}

const results = []
fs.createReadStream("mcVersions.csv")
	.pipe(csv())
	.on("data", data => results.push(data))
	.on("end", () => {
		results.sort(() => 0.5 - Math.random())

		const trainSize = Math.floor(results.length * 0.7)
		console.log("Splitting data into " + trainSize + " training and " + (results.length - trainSize) + " testing samples...")
		const trainSet = results.slice(0, trainSize)
		const testSet = results.slice(trainSize)

		const net = new NeuralNetwork({
			activation: "sigmoid"
		})

		const highestSnapshots = Math.max(...results.map(item => parseInt(item["Snapshots in the last three weeks"])))
		const highestYear = Math.max(...results.map(item => parseInt(item["Percent of year"])))
		const highestSinceLast = Math.max(...results.map(item => parseInt(item["Hours since last snapshot"])))
		const highestBugfixes = Math.max(...results.map(item => parseInt(item["Bugs fixed"])))
		const highestDay = Math.max(...results.map(item => parseInt(item["Day of week"])))
		const lowestSnapshots = Math.min(...results.map(item => parseInt(item["Snapshots in the last three weeks"])))
		const lowestYear = Math.min(...results.map(item => parseInt(item["Percent of year"])))
		const lowestSinceLast = Math.min(...results.map(item => parseInt(item["Hours since last snapshot"])))
		const lowestBugfixes = Math.min(...results.map(item => parseInt(item["Bugs fixed"])))
		const lowestDay = Math.min(...results.map(item => parseInt(item["Day of week"])))

		const normalize = item => ([
			(parseInt(item["Snapshots in the last three weeks"]) - lowestSnapshots) / (highestSnapshots - lowestSnapshots),
			(parseInt(item["Percent of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])

		net.train(prepareData(trainSet.map(normalize), trainSet.map(item => [item.Name == "-1000" ? 0 : 1])), {
			log: true,
			logPeriod: 1000,
			timeout: 1000 * 60 * 2,
			iterations: 35000,
			errorThresh: 0.008,
			learningRate: 0.35
		})

		const stats = net.test(prepareData(testSet.map(normalize), testSet.map(item => [item.Name == "-1000" ? 0 : 1])))
		console.log(stats)

		const date = new Date()
		const prediction = net.run(normalize({
			"Snapshots in the last three weeks": "1",
			"Percent of year": (date.getMonth() * 30 + date.getDate()) / 365 * 100,
			"Hours since last snapshot": 24 * 3,
			"Bugs fixed": "4",
			"Day of week": date.getDay() == 0 ? 7 : date.getDay()
		}))
		console.log(prediction)

		fs.writeFileSync("./web/modelFunction.js",
			net.toFunction().toString() +
			"\n" +
			"\nconst highestSnapshots = " + highestSnapshots +
			"\nconst highestYear = " + highestYear +
			"\nconst highestSinceLast = " + highestSinceLast +
			"\nconst highestBugfixes = " + highestBugfixes +
			"\nconst highestDay = " + highestDay +
			"\nconst lowestSnapshots = " + lowestSnapshots +
			"\nconst lowestYear = " + lowestYear +
			"\nconst lowestSinceLast = " + lowestSinceLast +
			"\nconst lowestBugfixes = " + lowestBugfixes +
			"\nconst lowestDay = " + lowestDay +
			"\n\nconst normalize = " + normalize.toString()
		)

		const svg = utilities.toSVG(net)
		fs.writeFileSync("./web/model.svg", svg)
	})
