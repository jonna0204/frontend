/*

// declaracion de variables //

//variable global
var identificador1 = "valor"; //variable string - texto
var identificador2 = 10;      //variable int - numero entero
var identificador3 = 10.5;    //variable float - numero decimal
var identificador4 = true;    //variable boolean - true or false
var identificador5 = "c";     //variable character - un caracter

//variable local
let variablelocal1 = "cualquier valor";
let variablelocal2 = 10;
let variablelocal3 = 10.5;
let variablelocal4 = false;
let variablelocal5 = "c";

//log en programacion es loguear, informar mediante la consola o un archivo
console.log(identificador1);

*/

//INGRESO DE NUMEROS O DATOS//

var numero1 = prompt("Ingrese el primer número");
var numero2 = prompt("Ingrese el segundo número");

//CONVERTIR STRING EN NUMERO ENTERO//

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);



//CALCULAR CUAL ES MAYOR O SI TIENEN EL MISMO VALOR//
if(numero1 > numero2){
    alert(numero1+" es mayor que "+numero2)
}else if(numero1 == numero2){
    alert("Los numeros son iguales")
}else{
    alert(numero2+" es mayor que "+numero1)
}

//ALERTA EN EL NAVEGADOR//

alert(numero1+numero2); 