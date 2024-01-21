function anonymous(input
) {
return [1/(1+1/Math.exp((0.9770233631134033-3.1391055583953857*1/(1+1/Math.exp((31.72144317626953-30.548601150512695*(input[0]||0)+1.375548243522644*(input[1]||0)-1.703856110572815*(input[2]||0)-27.798439025878906*(input[3]||0)-91.76678466796875*(input[4]||0))))-3.855120897293091*1/(1+1/Math.exp((-7.661197185516357-1.9269587993621826*(input[0]||0)+1.8524563312530518*(input[1]||0)-0.7894572019577026*(input[2]||0)-59.00118637084961*(input[3]||0)+24.76959800720215*(input[4]||0))))-18.716312408447266*1/(1+1/Math.exp((-25.40182876586914+37.05778503417969*(input[0]||0)-42.161582946777344*(input[1]||0)+18.37779426574707*(input[2]||0)+7.833672046661377*(input[3]||0)+31.96920394897461*(input[4]||0)))))))];
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