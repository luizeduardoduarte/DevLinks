function toggleMode() {
  const html = document.documentElement// selecionando arquivo
  html.classList.toggle("light")  // botao para transacao de Mode Dark/Light

  const img = document.querySelector("#profile img") // selecionando a imagem do profile

  // troca de imagens
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/img_direito.jpg")
    img.setAttribute("alt", "Descricao Light") 
  } else {
    img.setAttribute("src", "./assets/assets/img_esquerdo.jpg")
    img.setAttribute("alt", "Descricao Dark")
  }
}