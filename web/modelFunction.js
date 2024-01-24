function anonymous(input
) {
return [1/(1+1/Math.exp((1.0329504013061523-21.159156799316406*1/(1+1/Math.exp((-22.86236000061035+44.83294677734375*(input[0]||0)-45.6352653503418*(input[1]||0)+12.312557220458984*(input[2]||0)+13.349701881408691*(input[3]||0)+19.62771224975586*(input[4]||0))))-2.8397586345672607*1/(1+1/Math.exp((30.512300491333008-17.30412483215332*(input[0]||0)-7.566019058227539*(input[1]||0)+7.809905529022217*(input[2]||0)-6.323780059814453*(input[3]||0)-105.52982330322266*(input[4]||0))))-5.295301914215088*1/(1+1/Math.exp((-0.624964714050293-3.548280715942383*(input[0]||0)+0.6015729308128357*(input[1]||0)-0.8825238943099976*(input[2]||0)-21.61020278930664*(input[3]||0)+4.714254856109619*(input[4]||0)))))))];
}

const lastBuild = 1706110136384

const defaultSnapshots = 2
const defaultYear = 24
const defaultSinceLast = 147
const defaultBugfixes = 2
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
			(parseInt(item["Days of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])