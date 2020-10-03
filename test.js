let a = 37800

let b = a % 3600
let c = a / 3600
// console.log(b, c, takeOnlyBeforeDot(c))

const takeOnlyBeforeDot = (number) => {
  return number.toString().split('.')[0]
}

const putZero = (number) => {
  return number < 10 ? `0${number}` : `${number}`
}

function humanReadable(seconds) {
  if (seconds === 0) return "00:00:00"
  if (seconds <= 59) return `00:00:${putZero(seconds)}`
  if (seconds < 3600) {
    let sec = seconds % 60
    let min = seconds / 60
    return `00:${putZero(takeOnlyBeforeDot(min))}:${putZero(sec)}`
  }
  if (seconds >= 3600) {
    let hour = seconds / 3600
    let min1 = seconds % 3600
    let min = min1 / 60
    let sec = min1 % 60

    console.log(hour, min, sec)

    return `${putZero(takeOnlyBeforeDot(hour))}:${putZero(takeOnlyBeforeDot(min))}:${putZero(takeOnlyBeforeDot(sec))}`
  }
}

console.log(humanReadable(45296))