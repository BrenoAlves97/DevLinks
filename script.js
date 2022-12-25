//Selecionando o elemento
const htmlRoot = document.querySelector("html")
const switchMode = document.querySelector("#switch button")
const imageChange = document.querySelector("#profile img")

//Alterando o modo de tela;
switchMode.addEventListener("click", function () {
  //Maneira de realizar
  htmlRoot.classList.toggle("light")
  changeImage()
})

function changeImage() {
  const isLightMode = htmlRoot.classList.contains("light")
  if (isLightMode) {
    //alterando imagem se tiver no modo light
    imageChange.setAttribute("src", "../assets/profile-with-glasses.png")
    imageChange.setAttribute("alt", "Foto de Breno Alves de óculos")
  } else {
    //mantendo imagem normal
    imageChange.setAttribute("src", "../assets/profile.png")
    imageChange.setAttribute("alt", "Foto de Breno Alves")
  }
}
