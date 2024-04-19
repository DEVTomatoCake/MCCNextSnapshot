function anonymous(input
) {
return [1/(1+1/Math.exp((1.0284404754638672-3.1803555488586426*1/(1+1/Math.exp((0.3303825855255127-9.639801025390625*(input[0]||0)-0.5810567736625671*(input[1]||0)-48.35811233520508*(input[2]||0)-4.680293560028076*(input[3]||0)+8.528105735778809*(input[4]||0))))-3.183184862136841*1/(1+1/Math.exp((25.522605895996094-13.218914031982422*(input[0]||0)-3.7888612747192383*(input[1]||0)+11.667403221130371*(input[2]||0)-12.379135131835938*(input[3]||0)-98.2947006225586*(input[4]||0))))-4.653911113739014*1/(1+1/Math.exp((-4.2140631675720215-0.6845211386680603*(input[0]||0)+2.0249979496002197*(input[1]||0)+23.806543350219727*(input[2]||0)-71.25301361083984*(input[3]||0)+6.624137878417969*(input[4]||0)))))))];
}

const lastBuild = 1713535276316

const defaultSnapshots = 8
const defaultYear = 109
const defaultSinceLast = 1
const defaultBugfixes = 3
const defaultDay = 5

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