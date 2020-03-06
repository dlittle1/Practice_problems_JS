let inscription = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

console.log(matchingWords(inscription))

function matchingWords(str){
   let newArr = str.split(" ").filter((word, i, arr) => {
      return arr.indexOf(word) !== i
   })
   
   newArr = str.split(' ').filter((word, i, arr) => {
      for (var j = 0; j < newArr.length; j++) {
         if (word === newArr[j] && arr.indexOf(word) === i){
            return true
         }
      }
   }).join(' ')

   return newArr
}
