/*o codigo está infuncional, pois não habilitei a versão dark, 
porem isso pode ser utilizando atualizando 
umas partes simples dos codigos*/



function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/NFT02.png")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/NFT01.png")
    }
  }
