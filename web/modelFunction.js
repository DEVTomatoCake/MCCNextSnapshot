function anonymous(input
) {
return [1/(1+1/Math.exp((1.2360763549804688-19.216148376464844*1/(1+1/Math.exp((-17.579391479492188+34.41887283325195*(input[0]||0)-40.628570556640625*(input[1]||0)+12.443985939025879*(input[2]||0)+8.86405086517334*(input[3]||0)+14.924398422241211*(input[4]||0))))-6.004666805267334*1/(1+1/Math.exp((-1.6504595279693604-3.463385581970215*(input[0]||0)+0.8532764911651611*(input[1]||0)-0.36079955101013184*(input[2]||0)-16.393388748168945*(input[3]||0)+5.524806022644043*(input[4]||0))))-3.087128162384033*1/(1+1/Math.exp((21.085376739501953-7.989558696746826*(input[0]||0)-1.0491679906845093*(input[1]||0)+11.214588165283203*(input[2]||0)-1.0668668746948242*(input[3]||0)-102.17713928222656*(input[4]||0)))))))];
}

const lastBuild = 1706200129690

const defaultSnapshots = 3
const defaultYear = 25
const defaultSinceLast = 27
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
			(parseInt(item["Days of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])