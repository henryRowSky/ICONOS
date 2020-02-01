//alert("hola Mundo");

var var1, var2, resultado, resultadoArreglado, resultadoNumero;

var1 = 10;
var2 = 20;

resultado = (var1 * var2) / 3;
resultadoArreglado = resultado.toFixed(2);
resultadoNumero = parseFloat(resultadoArreglado);

/* Textos*/

var saludo, nombre, APaterno, AMaterno, nomUp, nomDown, ;

nombre = `K1k3`;
APaterno = `LPZ`;
AMaterno = `Flores`;

saludo = `Hola mi nombre es ${nombre} ${APaterno} ${AMaterno}`;

nomUp = nombre.toUpperCase();
nomDown = nombre.toLocaleLowerCase();