let saludo = nombre => console.log(`Hola ${nombre}`);
saludo("Enrique");

var num1 = prompt();
var num2 = prompt();

num1 = parseInt(num1);
num2 = parseInt(num2);

let sumar = (num1, num2) => {
    let suma = (num1 + num2);
    console.log(`La suma de ${num1} y ${num2} es ${suma}`);
}
let restar = (num1, num2) => {
    let resta = (num1 - num2);
    console.log(`La resta de ${num1} y ${num2} es ${resta}`);
}
let multiplicar = (num1, num2) => {
    let producto = (num1 * num2);
    console.log(`El producto de la multiplicacion de los numeros ${num1} y ${num2} es ${producto}`);
}
let dividir = (num1, num2) => {
    let div = (num1 / num2);
    console.log(`La division de ${num1} entre ${num2} es ${div}`);
}

sumar(num1, num2);
restar(num1, num2);
dividir(num1, num2);
multiplicar(num1, num2);