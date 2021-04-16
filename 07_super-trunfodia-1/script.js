var cartaSeiya = {
  nome: "Seiya",
  atributos:{
    ataque: 50,
    defesa: 60,
    magia: 90}
}

var cartaBulbassauro = {
  nome: "Bulbassauro",
  atributos:{
    ataque: 80,
    defesa: 50,
    magia: 50}
}

var cartaVader = {
  nome: "Darth Vader",
  atributos:{
    ataque: 70,
    defesa: 65,
    magia: 80}
}

var cartas = [cartaSeiya, cartaBulbassauro, cartaVader]

function sortearCarta(){
  var numeroMaquina = parseInt(Math.random()*3)
  var numeroJogador = parseInt(Math.random()*3)
  while (numeroMaquina == numeroJogador) {
    var numeroJogador = parseInt(Math.random()*3)
  }
  cartaMaquina = cartas[numeroMaquina]
  cartaJogador = cartas[numeroJogador]
  console.log(cartaJogador)
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado (){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i=0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert('Você venceu! :D')
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert('Você perdeu :(')
  } else {
    alert('Empate :|')
  }
  console.log(cartaMaquina)
}