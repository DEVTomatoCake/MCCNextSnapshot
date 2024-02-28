function anonymous(input
) {
return [1/(1+1/Math.exp((1.2744799852371216-4.214544296264648*1/(1+1/Math.exp((-5.74191951751709-1.0265785455703735*(input[0]||0)+1.518353819847107*(input[1]||0)+7.872585296630859*(input[2]||0)-30.402935028076172*(input[3]||0)+15.210466384887695*(input[4]||0))))-3.9818780422210693*1/(1+1/Math.exp((18.203622817993164-4.863572120666504*(input[0]||0)-1.6190458536148071*(input[1]||0)+12.868096351623535*(input[2]||0)-1.7454828023910522*(input[3]||0)-93.0257797241211*(input[4]||0))))-12.652813911437988*1/(1+1/Math.exp((-15.074817657470703+23.381446838378906*(input[0]||0)-27.6177978515625*(input[1]||0)+10.793076515197754*(input[2]||0)+7.250541687011719*(input[3]||0)+15.030158042907715*(input[4]||0)))))))];
}

const lastBuild = 1709134143620

const defaultSnapshots = 2
const defaultYear = 58
const defaultSinceLast = 3
const defaultBugfixes = 7
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