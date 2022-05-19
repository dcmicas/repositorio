const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nomes = ['Amanda', 'André', 'Andrew', 'Antonio', 'Barbara', 'Carolina', 'Bruno', 'Claudia', 'Debora']

/* nums.forEach((x) => {
  console.log(`<p>${x}</p>`)
}) */

let novoArray = nums.map(x => {
  return x ** 2
})

let numerosPares = nums.filter(function(x) {
  return x % 2 == 0
})

let numeroMaiorQue5 = nums.find((numero) => {
  return numero > 10
})

let indiceNumeroMaiorQue5 = nums.findIndex(numero => {
  return numero > 5
})

let nomesComCaracteresAcimaDe6 = nomes.filter(nome => {
  return nome.length > 6
})

let newArr = nomes.map(nome => nome.length)

