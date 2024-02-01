function anonymous(input
) {
return [1/(1+1/Math.exp((1.578967809677124-20.67456817626953*1/(1+1/Math.exp((8.293261528015137+15.994091033935547*(input[0]||0)-47.33048629760742*(input[1]||0)-10.805644989013672*(input[2]||0)+8.08444881439209*(input[3]||0)-37.0699577331543*(input[4]||0))))-5.359530448913574*1/(1+1/Math.exp((-3.8582763671875-0.31474968791007996*(input[0]||0)+0.38233840465545654*(input[1]||0)+0.9529572129249573*(input[2]||0)-8.184714317321777*(input[3]||0)+8.891944885253906*(input[4]||0))))-3.3792171478271484*1/(1+1/Math.exp((34.09697341918945+1.2250185012817383*(input[0]||0)+1.0618776082992554*(input[1]||0)+19.899381637573242*(input[2]||0)-57.62461471557617*(input[3]||0)-107.41172790527344*(input[4]||0)))))))];
}

const lastBuild = 1706817431753

const defaultSnapshots = 5
const defaultYear = 31
const defaultSinceLast = 7
const defaultBugfixes = 4
const defaultDay = 4

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