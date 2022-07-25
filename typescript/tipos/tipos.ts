// stirng 
let nome = 'João'
console.log(nome)

// numbers 
let idade = '27'
console.log(idade)

//boolean
let possuiHobbies = false
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade: number 
minhaIdade = 20
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["cozinhar", "Praticar esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)

//tupla
let endereco: [string, number, number] = ["Av Principal", 99, 123]
console.log(endereco)

//enums
enum Cor {
  Cinza, //0
  Verde, //1
  Azul, //2
  Roxo = 100, //100
  Ciano, //101
  Laranja = 5//5
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Roxo)
console.log(Cor.Ciano)
console.log(Cor.Laranja)

//any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)