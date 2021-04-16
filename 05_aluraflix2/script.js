function adicionarFilme() {
  var filmeInputCampo = document.querySelector("#filme")
  var filmeInput = filmeInputCampo.value
  verificacaoImgListarFilmes(filmeInput)
  filmeInputCampo.value=""
}

function verificacaoImgListarFilmes(oi){
 if (oi.endsWith(".jpg") || oi.endsWith(".png")){
   listarFilmesNaTela(oi)
 } else {
   alert("Imagem inválida")
 }
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}