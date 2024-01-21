function anonymous(input
) {
return [1/(1+1/Math.exp((1.7009388208389282-2.6685314178466797*1/(1+1/Math.exp((-56.605472564697266+60.3378791809082*(input[0]||0)+2.6107497215270996*(input[1]||0)-48.47526550292969*(input[2]||0)-2.5858447551727295*(input[3]||0)+99.85395050048828*(input[4]||0))))-13.762237548828125*1/(1+1/Math.exp((-1.8862429857254028-5.189235210418701*(input[0]||0)+0.15065522491931915*(input[1]||0)+7.278409957885742*(input[2]||0)-32.8648567199707*(input[3]||0)+3.7333521842956543*(input[4]||0))))-3.4094860553741455*1/(1+1/Math.exp((25.478452682495117-23.283098220825195*(input[0]||0)+1.5322238206863403*(input[1]||0)-2.761798143386841*(input[2]||0)-4.729151248931885*(input[3]||0)-72.89361572265625*(input[4]||0)))))))];
}

const highestSnapshots = 13
const highestYear = 99
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
			(parseInt(item["Percent of year"]) - lowestYear) / (highestYear - lowestYear),
			(parseInt(item["Hours since last snapshot"]) - lowestSinceLast) / (highestSinceLast - lowestSinceLast),
			(parseInt(item["Bugs fixed"]) - lowestBugfixes) / (highestBugfixes - lowestBugfixes),
			(parseInt(item["Day of week"]) - lowestDay) / (highestDay - lowestDay)
		])