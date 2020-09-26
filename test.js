function incrementString (strng) {
  let numbers = '0123456789'
  if (!numbers.includes(strng[strng.length - 1])) return `${strng}1`
  else {
    let newStrng = strng.split('')
    let m = parseFloat(newStrng[[strng.length - 1]]) + 1
    newStrng.pop()
    newStrng.push(`${m}`)
    return newStrng.join('')
    
  }

}




console.log(incrementString("foobar000"));
console.log(incrementString("foo"));
console.log(incrementString("foobar001"));
console.log(incrementString("foobar99"));
console.log(incrementString("foobar099"));
console.log(incrementString(""));