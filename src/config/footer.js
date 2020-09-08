function newElement(tagName, className) {
  const elem = document.createElement(tagName)
  elem.className = className
  return elem
}


function todayDate() {
  const dayDate = new Date()
  const forDate = document.querySelector('.forDate')

  const dataTagElement = newElement('h3', 'todayDate')
  forDate.innerHTML = dayDate.toDateString()

  forDate.appendChild(dataTagElement)
}

todayDate()