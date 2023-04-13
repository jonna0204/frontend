class Cliente{
    constructor(nombre,rut,clave,saldo){
        this.nombre = nombre
        this.rut = rut
        this.clave = clave
        this.saldo = saldo
    }
}

var cliente1 = new Cliente("Ignacia","24360754k","1111",130000)
var cliente2 = new Cliente("Andres","18630554k","1111",400000)
var cliente3 = new Cliente("Paz","183313622","1111",500000)

//indices parten desde 0 a n-1 siendo n la cantidad de elementos, (0,1,2)
var listaClientes = [cliente1,cliente2,cliente3]// tamaño 3, existen 3 elementos

//IDENTIFICACION
alert("Bienvenido a la banca en línea.")
var rutCliente = prompt("Ingrese su rut sin guión, Ejemplo: 27080007k.")
var claveCliente = prompt("Ingrese su clave de 4 digitos.")

//VALIDACION DE DATOS
var permiso = false
var cliente
for (let indice = 0; indice < listaClientes.length; indice++) {
    if(listaClientes[indice].rut == rutCliente && listaClientes[indice].clave == claveCliente){
        permiso = true
        alert("Hola, bienvenido/a "+listaClientes[indice].nombre+".")
        cliente = listaClientes[indice]
        menu(cliente)
        break;
    }
}



function menu(cliente) {
    let opcion = ""
    do {
        opcion = prompt("Seleccione que desea hacer:\n"+
                            "1.- Ver saldo.\n"+
                            "2.- Realizar giro.\n"+
                            "3.- Realizar deposito.\n"+
                            "4.- Salir.")

        switch (opcion) {
            case "1":
                alert("Su saldo actual es: $"+cliente.saldo+".")
                
                break;
            case "2":
                giro(opcion)
                break
                
            case "3":
                deposito(opcion)
                break;
            case "4":
                alert("Gracias por operar con tu banco, te esperamos de vuelta.")

                break;
            default:
                alert("Agregue una opcion valida.")
                break;
        }


    } while (opcion != "4");
}

function giro(){
    let giro = prompt("Ingrese monto para retirar.")
    monto = cliente.saldo - giro
    alert("Retiraste $"+giro+" y tu saldo actual es: $"+monto+".")   
}

function deposito() {
    let deposito = prompt("Ingrese monto para depositar.")
    deposito = parseInt(deposito)
    monto = cliente.saldo + deposito
    alert("Depositaste $"+deposito+" y tu saldo actual es: $"+monto+".")
    
}