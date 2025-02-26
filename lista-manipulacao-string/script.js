
// Matheus Alves de Oliveira Souza 

 
// 1 //

let frase = "JavaScript é incrível!";
console.log(frase.length); // 21

// 2 //

let palavra = "Programação";
console.log(palavra.charAt(0)); // "P"
console.log(palavra.charAt(palavra.length - 1)); // "o"

// 3 //

let mensagem = "Aprendendo JavaScript";
let palavraExtraida = mensagem.slice(11);
console.log(palavraExtraida); // "JavaScript"

// 4 //

let linguagens = "JavaScript,Python,Ruby,C++";
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens); // ["JavaScript", "Python", "Ruby", "C++"]

// 5 //

let texto = "O céu é azul e lindo";
let arrayTexto = texto.split(" ", 3);
console.log(arrayTexto); // ["O", "céu", "é"]

// 6 //

let fruta = "Abacaxi";
console.log(fruta.charAt(3)); // "c"

// 7 //

let frase2 = "Estudando JavaScript todos os dias";
let parteFrase = frase2.slice(10);
console.log(parteFrase); // "o JavaScript todos os dias"

// 8 //

let sentenca = "Aprender a programar é divertido";
let palavras = sentenca.split(" ");
console.log(palavras); // ["Aprender", "a", "programar", "é", "divertido"]

// 9 //

let animais = "Cachorro,Gato,Elefante,Leão";
let arrayAnimais = animais.split(",");
console.log(arrayAnimais[1]); // "Gato"

// 10 //

let texto3 = "Eu amo desenvolver aplicações web";
let palavrasTexto = texto3.split(" ");
console.log(palavrasTexto.length); // 5


