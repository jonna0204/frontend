//menu con opciones
var opcion, num1, num2;

var opcion = prompt("Seleccione que desea hacer: \n"+
        "1.- Calcular cual es el número mayor.\n"+
        "2.- Sumar.\n"+
        "3.- Restar.\n"+
        "4.- Multiplicar.\n"+
        "5.- Dividir.\n"+
        "6.- Mostrar los números ingresados.\n"+
        "7.- Salir");
        
//Si el usuairo ingresa cualquier opcion entre 1 y 6 solicitara que agregue 2 numeros

if(opcion != 7 && opcion >=1){
    num1 = parseInt(prompt("Ingrese el primer numero"))
    num2 = parseInt(prompt("Ingrese el segundo numero"))
};

//evaluar opcion para definir que hacer o a que flujo ir
//switch case

switch(opcion){
    case "1": //calcular cual numero es mayor
        mayor(num1,num2);
        break;
    
    case "2":
        adicion(num1,num2)
        break;
    
    case "3":
        sustraccion(num1,num2)
        break;
    case "4":
        producto(num1,num2)
        break;
    case "5":
        cociente(num1,num2)
        break;
    case "6":
        mostrar(num1,num2)
        break;
    case "7":
        alert("Gracias por participar.")
        break;


    default:
        alert("Elección incorrecta. Adios!")
        break;

}
        
//funciones
/*
function name(parametros){

}
*/

function mayor(numero1,numero2){
    if(numero1 > numero2){
        alert(numero1+" es mayor que "+numero2)
    }else if(numero1 === numero2){
        alert("Los numeros son iguales")
    }else{
        alert(numero2+" es mayor que "+numero1)
    }
}

function adicion(num1,num2){
    result = num1 + num2;
    alert("La suma entre "+ num1 +" y "+ num2 +" es igual a "+ result)
}

function sustraccion(num1,num2){
    result = num1 - num2;
    alert("La diferencia entre "+ num1 +" y "+ num2 +" es igual a "+ result)
}

function producto(num1,num2){
    result = num1 * num2;
    alert("El producto entre "+ num1 +" y "+ num2 +" es igual a "+ result)
}

function cociente(num1,num2){
    result = num1 / num2;
    alert("El cociente entre "+ num1 +" y "+ num2 +" es igual a "+ result)
}

function mostrar(num1,num2){
    alert("Los números que ingresaste fueron "+ num1 +" y "+ num2)
}
