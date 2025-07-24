// 📁 src/ejercicio4.js

let a = 10;
let b = 3;
let operador = '*';

switch (operador) {
  case '+':
    console.log(a + b); // Suma
    break;
  case '-':
    console.log(a - b); // Resta
    break;
  case '*':
    console.log(a * b); // Multiplicación
    break;
  case '/':
    if (b === 0) {
      console.log("indeterminado"); // División entre 0 no permitida
    } else {
      console.log(a / b); // División normal
    }
    break;
  default:
    console.log("operador no válido"); // Para cualquier otro símbolo
}