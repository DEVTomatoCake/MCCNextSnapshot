function anonymous(input
) {
return [1/(1+1/Math.exp((1.9092665910720825-2.056049108505249*1/(1+1/Math.exp((-43.88821792602539+47.0653190612793*(input[0]||0)+0.6534988284111023*(input[1]||0)-34.18529510498047*(input[2]||0)+1.3766648769378662*(input[3]||0)+76.54039001464844*(input[4]||0))))-5.366765975952148*1/(1+1/Math.exp((-0.133761465549469-7.6791276931762695*(input[0]||0)+1.6749120950698853*(input[1]||0)+3.4828948974609375*(input[2]||0)-37.33498764038086*(input[3]||0)+5.426296710968018*(input[4]||0))))-3.7319695949554443*1/(1+1/Math.exp((23.724050521850586-7.8338141441345215*(input[0]||0)-2.7090461254119873*(input[1]||0)+14.568106651306152*(input[2]||0)-2.0474586486816406*(input[3]||0)-110.68379974365234*(input[4]||0)))))))];
}

const lastBuild = 1707927095289

const defaultSnapshots = 4
const defaultYear = 44
const defaultSinceLast = 3
const defaultBugfixes = 6
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