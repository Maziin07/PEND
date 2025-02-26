// Matheus Alves de Olivera Souza //

// 1 //

let minhaString = "Olá, leandro!";
let meuNumero = 42;
let meuBooleano = true;

console.log(minhaString); 
console.log(typeof minhaString); 

console.log(meuNumero); 
console.log(typeof meuNumero); 

console.log(meuBooleano);
console.log(typeof meuBooleano);

// 2 //

let numero = 100;
let numeroComoString = String(numero);

console.log(numeroComoString);
console.log(typeof numeroComoString);

// 3 //

let stringNumerica = "123";
let stringComoNumero = Number(stringNumerica);

console.log(stringComoNumero);
console.log(typeof stringComoNumero);

// 4 //

let valorNulo = null;
let valorIndefinido;

console.log(typeof valorNulo); // Output: object
console.log(typeof valorIndefinido); // Output: undefined

// 5 //

let meuObjeto = { nome: "Alice", idade: 25 };
let meuArray = [1, 2, 3, 4, 5];
console.log(typeof meuObjeto); // Output: object
console.log(typeof meuArray); // Output: object
console.log(Array.isArray(meuArray)); // Output: true

// 6 //

let valorBigInt = BigInt(12345678901234567890n);

console.log(typeof valorBigInt); // Output: bigint

// 7 //

let tiposPrimitivos = ["string", "number", "boolean", "undefined", "symbol", "bigint", "null"];
console.log(tiposPrimitivos); // Output: ["string", "number", "boolean", "undefined", "symbol", "bigint", "null"]

// 8 //

let str = "Texto";
let num = 10;
let bool = false;
let indefinido;
let sym = Symbol("simbolo");
let bigInt = BigInt(12345678901234567890n);
let nulo = null;

console.log(str, typeof str); 
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(indefinido, typeof indefinido);
console.log(sym, typeof sym);

// 9 //

if (typeof varSymbol === 'symbol') {
    console.log('A variável contém um valor do tipo Symbol');
  } else {
    console.log('A variável não é do tipo Symbol');
  }

  // 10 //

let booleanParaNumero = Number(true);
console.log(booleanParaNumero);
console.log(typeof booleanParaNumero);

// 11 //

let nullParaNumero = Number(null);
console.log(nullParaNumero); // 0
console.log(typeof nullParaNumero); // number

// 12 //

let indefinidoparanumero = Number(undefined);
console.log(indefinidoparanumero); // NaN
console.log(typeof indefinidoparanumero); // number

// 13 //

let implicitConversion = 'O resultado é: ' + 42;
console.log(implicitConversion); // "O resultado é: 42"

// 14 //

let stringToNumber = '123' * 1;
console.log(stringToNumber); // 123
console.log(typeof stringToNumber); // number

// 15 //

console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String({})); // "[object Object]"

// 16 //

console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("")); // 0
console.log(Number("abc")); // NaN
console.log(Number("0")); // 0

// 17 //

console.log(parseInt("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45
// Diferença: parseInt converte a string para um inteiro, e o parseFloat converte a string pra um número de ponto flutuante (decimal).

// 18 //

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// 19 //

let bigIntValue = BigInt(1000000000000);
console.log(bigIntValue); // 1000000000000n
console.log(typeof bigIntValue); // bigint

// 20 //

let conversaoImplicita = 'O valor é ' + 50;
console.log(conversaoImplicita); // "O valor é 50"
// Aqui, a string 'O valor é ' é concatenada com o número 50, que é convertido implicitamente para uma string.













