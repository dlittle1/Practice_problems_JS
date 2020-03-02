console.log(antiCaps('Hello'));  // hELLO
antiCaps('racEcar')  // RACeCAR
antiCaps('bAnAnA')  // BaNaNa

function antiCaps(str) {
   return str.split("").map(letter => letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase()).join("")
}
