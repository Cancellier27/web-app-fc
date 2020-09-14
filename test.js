function pigIt(str){
  const alpha = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ'
  let breakString = str.split(' ')
  let answer = []
  for (let i of breakString) {
    if (alpha.includes(i[0])) {
      answer.push(add_ay(i))
    } else {answer.push(i)}
  }
  
  return answer.join(' ')
}

function add_ay(word) {
  let a = word.split('')
  let b = a.shift()
  a.push(b + 'ay')
  return a.join('')
}


console.log(pigIt('Pig latin is cool !'))

