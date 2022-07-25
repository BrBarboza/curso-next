"use strict";
// stirng 
let nome = 'João';
console.log(nome);
// numbers 
let idade = '27';
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 20;
console.log(typeof minhaIdade);
//array
let hobbies = ["cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
//tupla
let endereco = ["Av Principal", 99, 123];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Roxo"] = 100] = "Roxo";
    Cor[Cor["Ciano"] = 101] = "Ciano";
    Cor[Cor["Laranja"] = 5] = "Laranja"; //5
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Roxo);
console.log(Cor.Ciano);
console.log(Cor.Laranja);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
