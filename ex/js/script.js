var undMacas = Number(prompt("Digite quantas maças deseja?"))
var precoUndMacas = 1.30

if (undMacas >= 12) {
    precoUndMacas = 1
    var calculo = undMacas * precoUndMacas
    alert(`Você comprou ${undMacas} de maçãs e saiu na promoção
total = ${Calculo}`)
}else {
    var calculo = undMacas * precoUndMacas
    alert(`Você comprou ${undMacas} de maçãs.
total = ${calculo}`)
}