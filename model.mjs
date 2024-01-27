import fs from "node:fs"
import csv from "csv-parser"
import { NeuralNetwork, utilities } from "brain.js"

const prepareData = (features, target) => {
	const data = []
	for (let i = 0; i < features.length; i++) data.push({input: features[i], output: target[i]})
	return data
}

import mcVersions from "./mcVersions.json" assert { type: "json" }
import bugs from "./bugs.json" assert { type: "json" }

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
		const highestYear = Math.max(...results.map(item => parseInt(item["Day of year"])))
		const highestSinceLast = Math.max(...results.map(item => parseInt(item["Hours since last snapshot"])))
		const highestBugfixes = Math.max(...results.map(item => parseInt(item["Bugs fixed"])))
		const highestDay = Math.max(...results.map(item => parseInt(item["Day of week"])))
		const lowestSnapshots = Math.min(...results.map(item => parseInt(item["Snapshots in the last three weeks"])))
		const lowestYear = Math.min(...results.map(item => parseInt(item["Day of year"])))
		const lowestSinceLast = Math.min(...results.map(item => parseInt(item["Hours since last snapshot"])))
		const lowestBugfixes = Math.min(...results.map(item => parseInt(item["Bugs fixed"])))
		const lowestDay = Math.min(...results.map(item => parseInt(item["Day of week"])))

		const normalize = item => ([
			(parseInt(item["Snapshots in the last three weeks"]) - lowestSnapshots) / (highestSnapshots - lowestSnapshots),
			(parseInt(item["Day of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])

		net.train(prepareData(trainSet.map(normalize), trainSet.map(item => [item.Name == "" ? 0 : 1])), {
			log: true,
			logPeriod: 1000,
			timeout: 1000 * 60 * 2,
			iterations: 35000,
			errorThresh: 0.008,
			learningRate: 0.35
		})

		const stats = net.test(prepareData(testSet.map(normalize), testSet.map(item => [item.Name == "" ? 0 : 1])))
		console.log(stats)

		const lastThreeWeeks = results.filter(item => item.Name != "" && new Date(item.Date).getTime() > Date.now() - 1000 * 60 * 60 * 24 * 7 * 3).length
		const date = new Date()

		const defaultValues = {
			"Snapshots in the last three weeks": lastThreeWeeks,
			"Day of year": date.getMonth() * 30 + date.getDate(),
			"Hours since last snapshot": Math.abs(Math.round((new Date(mcVersions[0].releaseTime).getTime() - Date.now()) / 1000 / 60 / 60)),
			"Bugs fixed": bugs.filter(bug => date.toISOString().substring(0, 10) == bug).length,
			"Day of week": date.getDay() == 0 ? 7 : date.getDay()
		}
		const prediction = net.run(normalize(defaultValues))
		console.log("Current prediction for today: " + (prediction[0] * 100).toFixed(2) + "%")

		fs.writeFileSync("./web/modelFunction.js",
			net.toFunction().toString() +
			"\n" +
			"\nconst lastBuild = " + Date.now() +
			"\n" +
			"\nconst defaultSnapshots = " + defaultValues["Snapshots in the last three weeks"] +
			"\nconst defaultYear = " + defaultValues["Day of year"] +
			"\nconst defaultSinceLast = " + defaultValues["Hours since last snapshot"] +
			"\nconst defaultBugfixes = " + defaultValues["Bugs fixed"] +
			"\nconst defaultDay = " + defaultValues["Day of week"] +
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
