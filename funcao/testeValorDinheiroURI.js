let valor = 11257
let cont = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0
let cont6 = 0
let cont7 = 0

console.log(valor)

while (valor >= 100){
  cont++
  valor -= 100
}

while (valor >= 50){
  cont2++
  valor -= 50
}

while (valor >= 20){
  cont3++
  valor -= 20
}

while (valor >= 10){
  cont4++
  valor -= 10
}

while (valor >= 5){
  cont5++
  valor -=5
}

while (valor >= 2){
  cont6++
  valor -= 2
}

while (valor == 1){
  cont7++
  valor -= 1
}

console.log(" " + cont + " nota(s) de R$ 100,00")
console.log(" " + cont2 + " nota(s) de R$ 50,00")
console.log("" + cont3 + " nota(s) de R$ 20,00")
console.log("" + cont4 + " nota(s) de R$ 10,00")
console.log("" + cont5 + " nota(s) de R$ 5,00")
console.log("" + cont6 + " nota(s) de R$ 2,00")
console.log("" + cont7 + " nota(s) de R$ 1,00")

// 100, 50, 20, 10, 5, 2, 1