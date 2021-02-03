let a = 'Filipe'
let aa = ['F', 'i', 'l', 'i', 'p', 'e']
let bb = ['F']

bb.splice(bb.length, 0, a[0] + 'ay')
bb.splice(0, 1)



function pigIt(str){
  const alph = 'abcdefghijklmnopqrstuvxwyzABCDEFGIJKLMNOPQRSTUVXWYZ'
  let newStr = str.split(' ').map(item => {
    if(alph.includes(item[0])) {
      return item.substr(1) + item[0] + 'ay'

        // newItem.push(newItem[0] + 'ay')
        // newItem.shift()
      // return newItem
    }
    return item
  })
  return newStr
}

console.log(pigIt(a))