var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 9:"))
  if (chute == numeroSecreto) {
    alert("Uhu! Você Acertou!")
    break
  } else if (chute > numeroSecreto) {
    alert("O número é menor.")
    var tentativas = tentativas - 1
  } else {
    alert("O número é maior")
    var tentativas = tentativas - 1
  }
}