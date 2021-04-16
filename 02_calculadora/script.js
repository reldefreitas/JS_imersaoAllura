var primeiroNumero = parseInt(prompt("Digite um número:"))
var segundoNumero = parseInt(prompt("Digite outro número:"))
var operacao = parseInt(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar, ou 4 para dividir:"))

if (operacao == 1) {
  var resultado = primeiroNumero + segundoNumero
  document.write ("<h2>" + primeiroNumero + " + " + segundoNumero + " = " + resultado + "</h2>")
}else if (operacao == 2) {
  var resultado = primeiroNumero - segundoNumero
  document.write ("<h2>" + primeiroNumero + " - " + segundoNumero + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = primeiroNumero * segundoNumero
  document.write ("<h2>" + primeiroNumero + " x " + segundoNumero + " = " + resultado + "</h2>")
} else if (operacao == 4) {
  var resultado = primeiroNumero / segundoNumero
  document.write ("<h2>" + primeiroNumero + " / " + segundoNumero + " = " + resultado + "</h2>")
}else {
  document.write ("<h2>Operação Inválida</h2>")
}