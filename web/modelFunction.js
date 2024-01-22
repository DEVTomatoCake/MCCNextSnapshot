function anonymous(input
) {
return [1/(1+1/Math.exp((1.356321096420288-4.114247798919678*1/(1+1/Math.exp((31.593116760253906-29.305116653442383*(input[0]||0)+0.26717454195022583*(input[1]||0)-1.0568749904632568*(input[2]||0)-28.546268463134766*(input[3]||0)-78.41326904296875*(input[4]||0))))+3.0264832973480225*1/(1+1/Math.exp((-1.8294450044631958+18.802125930786133*(input[0]||0)+3.8024885654449463*(input[1]||0)-129.63589477539062*(input[2]||0)-21.426963806152344*(input[3]||0)-16.047775268554688*(input[4]||0))))-4.7093610763549805*1/(1+1/Math.exp((-9.629910469055176+9.03982162475586*(input[0]||0)+0.276490181684494*(input[1]||0)+3.6386783123016357*(input[2]||0)-11.31558609008789*(input[3]||0)+18.455171585083008*(input[4]||0)))))))];
}

const lastBuild = 1705898411612

const defaultSnapshots = 2
const defaultYear = 22
const defaultSinceLast = 88
const defaultBugfixes = 0
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
			(parseInt(item["Days of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])