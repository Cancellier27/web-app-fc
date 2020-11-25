function changeColor() {
  const checkbox = document.getElementById('ThemeCheckbox')
  const stylePath = document.getElementById('styleTag')

  if (checkbox.checked)  {
    stylePath.href = "./src/style/globalLight.css"
  } else {
    stylePath.href = "./src/style/globalDark.css"
  }
}