function anonymous(input
) {
return [1/(1+1/Math.exp((1.187477946281433-4.115423679351807*1/(1+1/Math.exp((23.585430145263672-4.8021240234375*(input[0]||0)-2.6171092987060547*(input[1]||0)+15.634324073791504*(input[2]||0)-6.659724712371826*(input[3]||0)-118.71304321289062*(input[4]||0))))-2.8367607593536377*1/(1+1/Math.exp((-8.213394165039062-24.885215759277344*(input[0]||0)+3.373645544052124*(input[1]||0)+12.344298362731934*(input[2]||0)-46.136573791503906*(input[3]||0)+24.704580307006836*(input[4]||0))))-2.437772750854492*1/(1+1/Math.exp((-30.186559677124023+13.635931015014648*(input[0]||0)+0.3725672662258148*(input[1]||0)-0.2618115246295929*(input[2]||0)-79.31861877441406*(input[3]||0)+89.30481719970703*(input[4]||0)))))))];
}

const lastBuild = 1706376753047

const defaultSnapshots = 3
const defaultYear = 27
const defaultSinceLast = 76
const defaultBugfixes = 0
const defaultDay = 6

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