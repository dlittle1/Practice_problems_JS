Array.prototype.myMap = function(callBack){
   let mappedArray = []
   for (let i = 0; i < this.length; i++){
      mappedArray.push(callBack(this[i]))
   }
   return mappedArray
}
// Examples of how to test and use your "myMap" method
const numbers = ["1", "3", "7", "4"].myMap(item => Number(item))
console.log(numbers) // => [1, 3, 7, 4]
const jsx = ["first", "second", "third"].myMap(str => (`<div>${str}</div>`))
console.log(jsx) // => ["<div>first</div>", "<div>second</div>", "<div>third</div>"]
