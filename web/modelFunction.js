function anonymous(input
) {
return [1/(1+1/Math.exp((1.2542425394058228-1.8550151586532593*1/(1+1/Math.exp((18.58707618713379-49.29655456542969*(input[0]||0)+0.33823004364967346*(input[1]||0)-8.182097434997559*(input[2]||0)-21.42060089111328*(input[3]||0)-31.765335083007812*(input[4]||0))))-2.348439931869507*1/(1+1/Math.exp((28.921398162841797-1.922860860824585*(input[0]||0)-11.216360092163086*(input[1]||0)+12.281929016113281*(input[2]||0)-6.002430438995361*(input[3]||0)-106.83174896240234*(input[4]||0))))-4.692412376403809*1/(1+1/Math.exp((-2.9149510860443115-0.9482037425041199*(input[0]||0)+0.16640137135982513*(input[1]||0)-0.4612105190753937*(input[2]||0)-16.60333824157715*(input[3]||0)+9.08703327178955*(input[4]||0)))))))];
}

const lastBuild = 1713198554858

const defaultSnapshots = 5
const defaultYear = 105
const defaultSinceLast = 4
const defaultBugfixes = 11
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