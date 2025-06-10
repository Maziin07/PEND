// 1):

// 1.1 - Erro: é uma falha que impede o código de funcionar corretamente.

// 1.2 - Exceção: é um erro detectado e tratado durante a execução do programa.

// 1.3 - Diferença: erro é algo inesperado que pode travar o programa; exceção é uma situação prevista que pode ser tratada com try...catch.

// 2):

let nome = "Matheus";
let idade = "vinte"; // erro lógico
let soma = idade + 10; // Resultado vai ser "vinte10", sem exceção

console.log("2. Soma incorreta:", soma);

// 3):

// Cenário: entrada de uma pessoa em um formulário
function validarIdade(entrada) {
  if (isNaN(entrada)) {
    console.log("Erro: Esperado número, recebido texto.");
  } else {
    console.log("Idade válida:", entrada);
  }
}
validarIdade("vinte");

// 4):

// ReferenceError: acontec quando usamos uma variavel que não foi declarada.

// TypeError: acontece quando usamos um tipo de forma errada, como chamar um número como função.

// SyntaxError: erro na escrita do código, como esquecer uma chave ou um parêntese.

// 5):

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}
console.log(safeParse('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse('texto inválido')); // null

// 6):

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    } else {
      throw e;
    }
  }
}


// 7):

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    } else {
      throw e;
    }
  } finally {
    console.log("Parse attempt finished");
  }
}
console.log(safeParse('{"curso": "front-end"}'));
console.log(safeParse('erro'));

// 8):

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

try {
  console.log(checkAge(30)); // válida
  console.log(checkAge(-5)); // erro
} catch (e) {
  console.log(e.toString());
}

// 9):

function soma(a, b) {
  console.log("Valor de a:", a);
  console.log("Valor de b:", b);
  let resultado = a + b;
  console.log("Resultado da soma:", resultado);
  return resultado;
}
console.log(soma(2, undefined)); // NaN
// undefined + numero = NaN (erro logico)

// 10):

/* 

Passos:
1. Pressionar F12 ou clicar com botão direito e selecionar 'Inspecionar'.
2. Ir até a aba 'Sources' ou 'Depurador').
3. Ver os arquivos JS e inserir breakpoints.

*/

// 11):

function testeDebug(x) {
  const y = x * 2;
  debugger;
  return y;
}
testeDebug(5);

// quando rodar no navegador a execução pausa no debugger, é possível inspecionar variáveis antes de continuar.

// 12):

function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
externo(4);

/*
Step Over: executa a função sem entrar nela.
Step Into: entra na função chamada.
Step Out: sai da função atual para a anterior.
*/

// 13:

/* 

Durante a execução de `interno`
▶ externo
  ▶ interno

*/
