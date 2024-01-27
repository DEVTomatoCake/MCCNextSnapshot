const fsPromises = require("node:fs").promises

const versions = require("./mcVersions.json")
const bugs = require("./bugs.json")

async function main() {
	let csv = "Name,Type,Date,Snapshots in the last three weeks,Day of year,Hours since last snapshot,Bugs fixed,Day of week\n"
	versions.forEach((ver, i) => {
		if (!versions[i + 1]) return
		const time = new Date(ver.releaseTime)

		let inRow = 0
		for (let j = i + 1; j < versions.length; j++) {
			if (new Date(versions[j].releaseTime).getTime() > time.getTime() - 1000 * 60 * 60 * 24 * 7 * 3) inRow++
			else break
		}

		const start = new Date(time.getFullYear(), 0, 1)
		const end = new Date(time.getFullYear() + 1, 0, 1)
		const yearProgress = (Math.abs(time - start) / Math.abs(end - start) * 365).toFixed(1)

		const nextTime = new Date(versions[i + 1].releaseTime)
		const hoursSince = Math.round((time - nextTime) / (1000 * 60 * 60))

		const currentISO = time.toISOString()
		const bugsFixed = bugs.filter(bug => currentISO.substring(0, 10) == bug).length

		csv += ver.id + "," + ver.type + "," + currentISO + "," + inRow + "," + yearProgress + "," + hoursSince + "," + bugsFixed + "," + (time.getDay() == 0 ? 7 : time.getDay()) + "\n"

		const nextTimeZero = new Date(nextTime.getFullYear(), nextTime.getMonth(), nextTime.getDate()).getTime()
		const nextISO = nextTime.toISOString()
		for (
			let k = new Date(time.getFullYear(), time.getMonth(), time.getDate() - 1, 16).getTime();
			k > nextTimeZero && new Date(k).toISOString().substring(0, 10) != nextISO.substring(0, 10);
			k -= 1000 * 60 * 60 * 24
		) {
			const fakeTime = new Date(k)

			let inRowFake = 0
			for (let j = i + 1; j < versions.length; j++) {
				if (new Date(versions[j].releaseTime).getTime() > k - 1000 * 60 * 60 * 24 * 7 * 3) inRowFake++
				else break
			}

			const startFake = new Date(fakeTime.getFullYear(), 0, 1)
			const endFake = new Date(fakeTime.getFullYear() + 1, 0, 1)
			const yearProgressFake = (Math.abs(fakeTime - startFake) / Math.abs(endFake - startFake) * 365).toFixed(1)

			const hoursSinceFake = Math.round((fakeTime - nextTime) / (1000 * 60 * 60))
			const bugsFixedFake = bugs.filter(bug => fakeTime.toISOString().substring(0, 10) == bug).length

			csv += ",," + fakeTime.toISOString() + "," + inRowFake + "," + yearProgressFake + "," + hoursSinceFake + "," + bugsFixedFake + "," + (fakeTime.getDay() == 0 ? 7 : fakeTime.getDay()) + "\n"
		}
	})

	fsPromises.writeFile("./fancyStats.csv", csv)
}
main()
