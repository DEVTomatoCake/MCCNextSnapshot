function anonymous(input
) {
return [1/(1+1/Math.exp((0.7646594047546387-13.164529800415039*1/(1+1/Math.exp((6.891733169555664-29.78413200378418*(input[0]||0)-1.6622236967086792*(input[1]||0)+2.5689496994018555*(input[2]||0)-12.64047908782959*(input[3]||0)-38.6583251953125*(input[4]||0))))-2.285874605178833*1/(1+1/Math.exp((18.982019424438477-7.874740123748779*(input[0]||0)-1.7439870834350586*(input[1]||0)+63.02982711791992*(input[2]||0)+8.434868812561035*(input[3]||0)-99.91476440429688*(input[4]||0))))-4.506994724273682*1/(1+1/Math.exp((-1.8404232263565063-2.8143858909606934*(input[0]||0)+0.8927870392799377*(input[1]||0)-3.2556066513061523*(input[2]||0)-22.907377243041992*(input[3]||0)+8.302043914794922*(input[4]||0)))))))];
}

const lastBuild = 1714415936513

const defaultSnapshots = 10
const defaultYear = 119
const defaultSinceLast = 6
const defaultBugfixes = 7
const defaultDay = 1

const highestSnapshots = 13
const highestYear = 364
const highestSinceLast = 1797
const highestBugfixes = 58
const highestDay = 7
const lowestSnapshots = 0
const lowestYear = 0
const lowestSinceLast = 1
const lowestBugfixes = 0
const lowestDay = 1

const normalize = item => ([
				(parseInt(item["Snapshots in the last three weeks"]) - lowestSnapshots) / (highestSnapshots - lowestSnapshots),
				(parseInt(item["Day of year"]) - lowestYear) / (highestYear - lowestYear),
				(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
				(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
				(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
			])