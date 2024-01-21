const fsPromises = require("node:fs").promises
const jiraURL = "https://bugs.mojang.com/rest/api/latest/search?fields=resolutiondate&jql=project%20%3D%20MC%20AND%20status%20%3D%20Resolved%20AND%20resolution%20%3D%20Fixed&maxResults=1000&startAt="

async function loadBugs() {
	let start = 0
	let bugs = []
	do {
		console.log("Fetching " + start + "...")
		const res = await fetch(jiraURL + start)
		const json = await res.json()
		start += 1000
		bugs = bugs.concat(json.issues.map(issue => ({
			key: issue.key,
			resolutiondate: issue.fields.resolutiondate
		})))
	} while (bugs.length % 1000 == 0)

	console.log(bugs.length)
	fsPromises.writeFile("./bugs.json", JSON.stringify(bugs))
}
loadBugs()
