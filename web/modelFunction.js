function anonymous(input
) {
return [1/(1+1/Math.exp((0.927984893321991-2.78568172454834*1/(1+1/Math.exp((20.31476402282715-9.02428150177002*(input[0]||0)+0.9494305849075317*(input[1]||0)+35.650577545166016*(input[2]||0)+2.7118844985961914*(input[3]||0)-107.69710540771484*(input[4]||0))))-4.08291482925415*1/(1+1/Math.exp((-10.776057243347168-2.885272264480591*(input[0]||0)+1.524062156677246*(input[1]||0)-3.4239883422851562*(input[2]||0)-84.94557189941406*(input[3]||0)+36.63054275512695*(input[4]||0))))-20.303863525390625*1/(1+1/Math.exp((15.321466445922852-64.81507110595703*(input[0]||0)-6.377295970916748*(input[1]||0)-39.58147048950195*(input[2]||0)-7.628744125366211*(input[3]||0)-16.4630184173584*(input[4]||0)))))))];
}

const lastBuild = 1713796650322

const defaultSnapshots = 8
const defaultYear = 112
const defaultSinceLast = 1
const defaultBugfixes = 1
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