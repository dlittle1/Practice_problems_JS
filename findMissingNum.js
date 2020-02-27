// Write a function that takes an unsorted array as a parameter, and returns the missing number.
// The missing number is the one missing from the array of numbers if the numbers were sorted
// from least to greatest.

function findMissingNo(arr){
   let newArr = arr.sort((a, b) => a - b)
   let missingNo;
   let lastNo = newArr[newArr.length - 1]
   let counter = 0;
   for (let i = newArr[0]; i < lastNo; i++){
      console.log(`i: ${i}, arr: ${newArr[counter]}`);
      if(i !== newArr[counter]){
         return missingNo = i
      }
      counter++
   }
   console.log(missingNo)
}

console.log(findMissingNo([3,5,4,8,1,2,7])); // 6
console.log(findMissingNo([10, 14, 12, 11, 16, 18, 17, 13])); // 15
// Guaranteed Conditions:
//   - The array has at least 3 numbers
//   - There are no repeated numbers
