var paulo = {
  nome: "paulo",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
}
var rafa = {
  nome: "rafa",
  vitorias: 3,
  empates: 4,
  derrotas: 2,
  pontos: 0
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function calculoPontos(jogador) {
  jogador.pontos = (jogador.vitorias * 3) + jogador.empates
}

function exibirJogadoresNaTela(jogadores) {
  var htmlLinhaJogador = ""
  for (var i = 0; i < jogadores.length; i++){
    calculoPontos(jogadores[i])
    htmlLinhaJogador += "<tr><td>" + jogadores[i].nome + "</td>"
    htmlLinhaJogador += "<td>" + jogadores[i].vitorias + "</td>"
    htmlLinhaJogador += "<td>" + jogadores[i].empates + "</td>"
    htmlLinhaJogador += "<td>" + jogadores[i].derrotas + "</td>"
    htmlLinhaJogador += "<td>" + jogadores[i].pontos + "</td>"
    htmlLinhaJogador += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>" + "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>" + "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = htmlLinhaJogador
}

function adicionarVitoria (i){
  jogador = jogadores[i]
  jogador.vitorias ++
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate (i){
  jogador = jogadores[i]
  jogador.empates ++
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota (i){
  jogador = jogadores[i]
  jogador.derrotas ++
  exibirJogadoresNaTela(jogadores)
}