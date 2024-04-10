function anonymous(input
) {
return [1/(1+1/Math.exp((1.1275125741958618-2.8594744205474854*1/(1+1/Math.exp((24.092315673828125-7.740708351135254*(input[0]||0)-2.201117753982544*(input[1]||0)+11.376401901245117*(input[2]||0)+17.126766204833984*(input[3]||0)-126.15792846679688*(input[4]||0))))-4.945394992828369*1/(1+1/Math.exp((-1.245332956314087-1.7223470211029053*(input[0]||0)+0.3679174780845642*(input[1]||0)+10.531599998474121*(input[2]||0)-35.814300537109375*(input[3]||0)+2.939938545227051*(input[4]||0))))-2.803044319152832*1/(1+1/Math.exp((-0.02758878841996193-9.032419204711914*(input[0]||0)-4.037502288818359*(input[1]||0)-66.88008880615234*(input[2]||0)-6.934390068054199*(input[3]||0)+14.572702407836914*(input[4]||0)))))))];
}

const lastBuild = 1712772555258

const defaultSnapshots = 4
const defaultYear = 100
const defaultSinceLast = 5
const defaultBugfixes = 16
const defaultDay = 3

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