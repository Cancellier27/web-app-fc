// function missing(s) {
 
// }

// console.log(missing("123567")); // ,4
// console.log(missing("899091939495")); //,92
// console.log(missing("9899101102")); //,100
// console.log(missing("599600601602")); // ,-1

function chunkArrayInGroups(arr, size) {
  // let count = size
  let iteratinons = arr.length
  let finalArr = []
  for (let i = 0; i < iteratinons; i += size) {
    finalArr.push(arr.slice(i, i + size))
  } 

  return finalArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))