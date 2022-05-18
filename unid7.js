function cumprimentar() {
  alert('Olá, usuário!')
}

function cumprimentar2(msg = 'Oi') {
  alert(msg)
}

function criarElementoHTML(txt, elemento = 'p') {
  document.write(`<${elemento}>${txt}</${elemento}>`)
}

function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  if (b > a) {
    return b - a
  } else {
    return a - b
  }
}

function imc(peso, altura) {
  return parseFloat((peso / (altura ** 2)).toFixed(2))
}

let total = somar(20, 32)

console.log(`total = ${total}`)

total = subtrair(20, 10)

console.log(`total = ${total}`)

console.log(imc(75, 1.7))

console.log(subtrair(2, 5))

/**
 * Δ = b ^ 2 - 4 * a * c
 * bhaskara = -b +- √Δ / 2 * a
 */