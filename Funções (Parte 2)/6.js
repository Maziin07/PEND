
let operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];

const num1 = 4;
const num2 = 2;

operations.forEach(operation => {
    const result = operation(num1, num2);
    console.log(`Resultado da operação: ${result}`);
});