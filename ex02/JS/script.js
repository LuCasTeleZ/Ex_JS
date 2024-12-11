var Fahrenheit = Number(prompt("Quantos fahrenhients estão no momento para converter para Celsius?"))

var grauCelsius = (Fahrenheit - 32) * (5/9)

alert(`${Fahrenheit} °F = ${grauCelsius.toFixed(0)} °C`)