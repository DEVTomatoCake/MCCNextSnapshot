function anonymous(input
) {
return [1/(1+1/Math.exp((0.9506729245185852-2.029083251953125*1/(1+1/Math.exp((28.801599502563477+15.787020683288574*(input[0]||0)-15.05820083618164*(input[1]||0)-10.420828819274902*(input[2]||0)-11.077213287353516*(input[3]||0)-94.08834075927734*(input[4]||0))))-2.187476634979248*1/(1+1/Math.exp((29.808258056640625-68.31504821777344*(input[0]||0)-3.2830734252929688*(input[1]||0)-18.98218536376953*(input[2]||0)-6.996799468994141*(input[3]||0)-59.87251663208008*(input[4]||0))))-4.239103317260742*1/(1+1/Math.exp((-8.791234970092773-2.275139331817627*(input[0]||0)+3.2564942836761475*(input[1]||0)+3.081360101699829*(input[2]||0)-53.255306243896484*(input[3]||0)+25.094120025634766*(input[4]||0)))))))];
}

const lastBuild = 1707416373837

const defaultSnapshots = 4
const defaultYear = 38
const defaultSinceLast = 28
const defaultBugfixes = 1
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