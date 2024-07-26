function anonymous(input
) {
return [1/(1+1/Math.exp((-0.37681856751441956-3.8232483863830566*1/(1+1/Math.exp((0.8765924572944641-6.521031379699707*(input[0]||0)+1.0377130508422852*(input[1]||0)+3.9378461837768555*(input[2]||0)-27.49983024597168*(input[3]||0)+2.7320556640625*(input[4]||0))))-3.1626203060150146*1/(1+1/Math.exp((21.766557693481445-18.27573585510254*(input[0]||0)+1.667100191116333*(input[1]||0)-3.218251943588257*(input[2]||0)-1.4830619096755981*(input[3]||0)-68.66671752929688*(input[4]||0))))+2.44232439994812*1/(1+1/Math.exp((29.538774490356445-25.68828773498535*(input[0]||0)+3.4873297214508057*(input[1]||0)-11.257896423339844*(input[2]||0)-1.0127376317977905*(input[3]||0)-53.141326904296875*(input[4]||0)))))))];
}

const lastBuild = 1721980150527

const defaultSnapshots = 0
const defaultYear = 206
const defaultSinceLast = 1031
const defaultBugfixes = 1
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