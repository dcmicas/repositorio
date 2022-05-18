function cumprimentar() {
  alert('Olá, usuário!')
}

function cumprimentar2(msg = 'Oi') {
  alert(msg)
}

function criarElementoHTML(txt, elemento = 'p') {
  document.write(`<${elemento}>${txt}</${elemento}>`)
}

function imc(peso, altura) {
  return parseFloat((peso / (altura ** 2)).toFixed(2))
}

// let total = somar(20, 32)

// console.log(`total = ${total}`)

// total = subtrair(20, 10)

// console.log(`total = ${total}`)

console.log(imc(75, 1.7))

let sub = (a, b) => {
  if (b > a) {
    return b - a
  } else {
    return a - b
  }
}
let somar = (a, b) => a + b
const f = () => 5
const dobro = x => x * 2

const resultado = sub(5, 6)
const r = somar(5, 8)

console.log(resultado)
console.log(r)
console.log(dobro(20))