snail = function(array) {
  let answer = array.map((item, index, arr) => {
    if (index === 0) 
    if (index === arr.length - 1) return item.reverse()
  })

  return answer
}


console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))  //[1, 2, 3, 6, 9, 8, 7, 4, 5]