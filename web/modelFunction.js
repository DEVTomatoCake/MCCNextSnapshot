function anonymous(input
) {
return [1/(1+1/Math.exp((1.6512693166732788-3.2236616611480713*1/(1+1/Math.exp((23.634946823120117-8.69914436340332*(input[0]||0)-2.661404848098755*(input[1]||0)+9.602523803710938*(input[2]||0)+14.443702697753906*(input[3]||0)-114.75244140625*(input[4]||0))))-2.369969606399536*1/(1+1/Math.exp((-37.82270812988281+27.400861740112305*(input[0]||0)-4.041675567626953*(input[1]||0)-18.536548614501953*(input[2]||0)-1.2932384014129639*(input[3]||0)+72.52957916259766*(input[4]||0))))-4.309596061706543*1/(1+1/Math.exp((-0.4441545307636261-2.8768162727355957*(input[0]||0)+1.1596496105194092*(input[1]||0)+9.277094841003418*(input[2]||0)-41.907264709472656*(input[3]||0)+2.2884681224823*(input[4]||0)))))))];
}

const lastBuild = 1705898063831

const defaultSnapshots = 18
const defaultYear = 8030
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
