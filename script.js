function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", "Descricao Light")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Descricao Dark")
  }

}