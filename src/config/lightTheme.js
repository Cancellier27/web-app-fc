function changeColor() {
  const checkbox = document.getElementById('ThemeCheckbox')
  const stylePath = document.getElementById('styleTag')

  if (checkbox.checked)  {
    stylePath.href = "./src/style/styleLight.css"
  } else {
    stylePath.href = "./src/style/style.css"
  }
}