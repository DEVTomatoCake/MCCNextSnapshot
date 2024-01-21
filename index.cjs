const fs = require("node:fs")
const fsPromises = require("node:fs").promises

/*
how many snapshots in a row: amount of snapshots in the last 3 weeks
the time of year: percent of year
how long without a snapshot: hours since last snapshot
current day of week: number from 1-7 monday-sunday
how many bugs fixed on mojira: bugs fixed in last 24 hours

how many messages boq has sent
*/

async function main() {
	let versions = {}
	if (fs.existsSync("./mcVersions.json")) versions = require("./mcVersions.json")
	else {
		const res = await fetch("https://piston-meta.mojang.com/mc/game/version_manifest_v2.json")
		const json = await res.json()
		versions = json.versions
		fsPromises.writeFile("./mcVersions.json", JSON.stringify(versions))
	}

	const filterDate = Date.now() - 1000 * 60 * 60 * 24 * 365 * 4
	versions = versions.filter(ver => new Date(ver.releaseTime).getTime() > filterDate)
	const bugs = require("./bugs.json")

	let csv = "Name,Type,Date,Snapshots in the last three weeks,Percent of year,Hours since last snapshot,Bugs fixed,Day of week\n"
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
		const timePercent = (Math.abs(time - start) / Math.abs(end - start) * 100).toFixed(4)

		const nextTime = new Date(versions[i + 1].releaseTime)
		const hoursSince = ((time - nextTime) / (1000 * 60 * 60)).toFixed(4)

		const currentISO = time.toISOString()
		const bugsFixed = bugs.filter(bug => currentISO.substring(0, 10) == bug.resolutiondate.substring(0, 10)).length

		csv += ver.id + "," + ver.type + "," + currentISO + "," + inRow + "," + timePercent + "," + hoursSince + "," + bugsFixed + "," + (time.getDay() == 0 ? 7 : time.getDay()) + "\n"

		const nextTimeZero = new Date(nextTime.getFullYear(), nextTime.getMonth(), nextTime.getDate()).getTime()
		const nextISO = nextTime.toISOString()
		for (let k = new Date(time.getFullYear(), time.getMonth(), time.getDate() - 1, 16).getTime(); k > nextTimeZero && new Date(k).toISOString().substring(0, 10) != nextISO.substring(0, 10); k -= 1000 * 60 * 60 * 24) {
			const fakeTime = new Date(k)

			let inRowFake = 0
			for (let j = i + 1; j < versions.length; j++) {
				if (new Date(versions[j].releaseTime).getTime() > fakeTime.getTime() - 1000 * 60 * 60 * 24 * 7 * 3) inRowFake++
				else break
			}

			const startFake = new Date(fakeTime.getFullYear(), 0, 1)
			const endFake = new Date(fakeTime.getFullYear() + 1, 0, 1)
			const percent = (Math.abs(fakeTime - startFake) / Math.abs(endFake - startFake) * 100).toFixed(4)

			const hoursSinceFake = ((fakeTime - nextTime) / (1000 * 60 * 60)).toFixed(4)
			const bugsFixedFake = bugs.filter(bug => fakeTime.toISOString().substring(0, 10) == bug.resolutiondate.substring(0, 10)).length

			csv += "-1000,-1000," + fakeTime.toISOString() + "," + inRowFake + "," + percent + "," + hoursSinceFake + "," + bugsFixedFake + "," + (fakeTime.getDay() == 0 ? 7 : fakeTime.getDay()) + "\n"
		}
	})

	fsPromises.writeFile("./mcVersions.csv", csv)
}
main()
