function anonymous(input
) {
return [1/(1+1/Math.exp((1.4755994081497192-2.1816253662109375*1/(1+1/Math.exp((-44.598934173583984+44.92745590209961*(input[0]||0)+1.7615795135498047*(input[1]||0)-24.86496925354004*(input[2]||0)-7.802082538604736*(input[3]||0)+79.8770751953125*(input[4]||0))))-3.5334367752075195*1/(1+1/Math.exp((15.10717487335205-6.371984958648682*(input[0]||0)-1.9485859870910645*(input[1]||0)+4.852741718292236*(input[2]||0)+8.080179214477539*(input[3]||0)-67.39234924316406*(input[4]||0))))-5.122491359710693*1/(1+1/Math.exp((-0.8814115524291992-3.9271774291992188*(input[0]||0)+1.0554403066635132*(input[1]||0)+6.258632183074951*(input[2]||0)-26.637588500976562*(input[3]||0)+2.963879346847534*(input[4]||0)))))))];
}

const lastBuild = 1715887822792

const defaultSnapshots = 6
const defaultYear = 136
const defaultSinceLast = 31
const defaultBugfixes = 4
const defaultDay = 4

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