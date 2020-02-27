const data = [
  { state: "UT", city: "Salt Lake City" },
  { state: "CA", city: "San Diego" },
  { state: "CA", city: "San Francisco" },
  { state: "CO", city: "Denver" }
]

function makeStateObj(arr){
   const result = {}
   for (var i = 0; i < arr.length; i++) {
      // will practice soon
   }
   return result
}

console.log(makeStateObj(data))
const answer =  {
  UT: ["Salt Lake City"],
  CA: ["San Diego", "San Francisco"],
  CO: ["Denver"]
}
