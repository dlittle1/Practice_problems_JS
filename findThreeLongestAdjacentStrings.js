function combined(arr){
   let count = 0;
   let newArr = []
   let total = 0;
   for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < 3; j++){
         //this is an = 8
         if ((j + i) >= arr.length){
            return newArr
         }
         count += arr[j + i].length
         if(count > total){
            newArr.push(arr[j+i])
            if(newArr.length > 3){
               newArr.shift()
            }
         }
      }
      total = count

      count = 0;
   }
   return newArr
}

console.log(combined(["this", "is", "an", "array"]));
// combined([ "this", "is", "an", "array"])
// Output:  ["is", "an", "array"]
    // they have the longest combined length of any 3 adjacent elements. (9 characters)
    // In contract, ["this", "is", "an"] only has a combined length of 8 characters
