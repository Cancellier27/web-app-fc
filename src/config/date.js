window.addEventListener("load", () => {
  const dayDate = new Date()
  const containerDate = document.querySelector('.todayDate')

  containerDate.innerHTML = dayDate.toDateString()
});