class Pessoa {

  constructor(nome, idade, cpf) {
    this.nome = nome
    this.idade = idade
    this.cpf = cpf
  }

  cumprimentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
  }

  static cumprimentar2() {
    console.log(`Olá`)
  }
}

let p = new Pessoa('Marcos', 20, '123.456.789-98')
let p2 = new Pessoa('Dayvson', 25, '132.465.798-42')
let p3 = new Pessoa('Amanda', 22, '951.753.862-24')

const pessoas = [p, p2, p3, new Pessoa('Aurelio', 23, '741.258.963-89')]

for (let pessoa of pessoas) {
  pessoa.cumprimentar()
}