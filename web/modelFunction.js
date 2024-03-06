function anonymous(input
) {
return [1/(1+1/Math.exp((1.4922747611999512-3.441854476928711*1/(1+1/Math.exp((28.17145538330078-14.772608757019043*(input[0]||0)-5.211871147155762*(input[1]||0)+5.451077938079834*(input[2]||0)-15.493693351745605*(input[3]||0)-99.44096374511719*(input[4]||0))))-19.542314529418945*1/(1+1/Math.exp((-19.901973724365234+47.028953552246094*(input[0]||0)-37.931053161621094*(input[1]||0)+30.730833053588867*(input[2]||0)+14.137064933776855*(input[3]||0)-6.232016086578369*(input[4]||0))))-5.430640697479248*1/(1+1/Math.exp((-2.156458616256714-1.9310193061828613*(input[0]||0)+0.6910180449485779*(input[1]||0)+0.0377190038561821*(input[2]||0)-14.35012435913086*(input[3]||0)+6.216629505157471*(input[4]||0)))))))];
}

const lastBuild = 1709748340879

const defaultSnapshots = 2
const defaultYear = 66
const defaultSinceLast = 7
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