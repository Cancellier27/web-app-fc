function newElement(tagName, className) {
  const elem = document.createElement(tagName)
  elem.className = className
  return elem
}


function todayDate() {
  const dayDate = new Date()
  const forDate = document.querySelector('.forDate')

  const dataField = newElement('h3', 'todayDate')
  dataField.innerHTML = dayDate.toDateString()

  forDate.appendChild(dataField)
}

todayDate()