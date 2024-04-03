function anonymous(input
) {
return [1/(1+1/Math.exp((3.4060254096984863-3.398127794265747*1/(1+1/Math.exp((-46.89773941040039+53.65455627441406*(input[0]||0)+2.923394203186035*(input[1]||0)-42.91839599609375*(input[2]||0)+0.2060951143503189*(input[3]||0)+80.67186737060547*(input[4]||0))))-4.229022026062012*1/(1+1/Math.exp((26.236238479614258-17.696535110473633*(input[0]||0)-0.5020143389701843*(input[1]||0)-33.55500030517578*(input[2]||0)+1.3989695310592651*(input[3]||0)-65.42837524414062*(input[4]||0))))-6.24786376953125*1/(1+1/Math.exp((-0.4947252869606018-4.553237438201904*(input[0]||0)+0.10697666555643082*(input[1]||0)+7.191193580627441*(input[2]||0)-17.911455154418945*(input[3]||0)+3.076662540435791*(input[4]||0)))))))];
}

const lastBuild = 1712172948744

const defaultSnapshots = 5
const defaultYear = 93
const defaultSinceLast = 8
const defaultBugfixes = 17
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