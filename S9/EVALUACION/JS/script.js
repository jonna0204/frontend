$(document).ready(function(){
    $("#comuniquemonos").submit(function (event){
        event.preventDefault();

        var nom = $("#nombre").val(); 
        var cor = $("#correo").val(); 
        var tel = $("#telefono").val(); 
        var mot = $("#motivo").val(); 
        var tex = $("#text").val();
        var enviar = $("enviar").val();
    
        if(nom == ""){
            alert("El campo nombre es obligatorio")
        }else if(cor == ""){
            alert("El campo email es obligatorio")
        }else if(tel == ""){
            alert("El campo telefono es obligatorio")
        }else if(mot == ""){
            alert("El campo motivo es obligatorio")
        }else if(tex == ""){
            alert("El campo texto es obligatorio")
        }
        else if(enviar = true){
            alert("Muchas gracias "+nom+" por su reporte. Nos contactaremos a la brevedad a su correo registrado.")
        }
    })
});



$(document).ready(function(){
    $("#reserva").submit(function (event){
        event.preventDefault();
    
        var nombre = $("#nombrer").val();
        var email = $("#emailr").val();
        var telefono = $("#telefonor").val();
        var fecha = $("#fechar").val();
        var hora = $("#horar").val();
        var asistentes = $("#asistentesr").val();

        if(nombre == ""){
            alert("El campo nombre es obligatorio")
        }else if(email == ""){
            alert("El campo email es obligatorio")
        }else if(telefono == ""){
            alert("El campo telefono es obligatorio")
        }else if(fecha == ""){
            alert("El campo fecha es obligatorio")
        }else if(hora == ""){
            alert("El campo hora es obligatorio")
        }else if(asistentes == ""){
            alert("El campo asistentes es obligatorio")
        }else if(reservar = true){
            alert("Muchas gracias "+nombre+" por reservar con nosotros. Nos contactaremos a la brevedad a su correo "+email+".")
        }
    })
});


$("#submitContactoModal").click(function(e) {
    //Evitando cualquier evento por default que tenga el formulario
    e.preventDefault();
    console.log("Submit event ejecutado");

    //Obteniendo los valores de los input del html, para el formulario de reserva
    //Se estan obteniendo a traves del id
    var nombre = $("#nombreContactoModal").val();
    var correo = $("#correoContactoModal").val();
    var telefono = $("#telefonoContactoModal").val()
    var fecha = $("#fechaContactoModal").val()
    var motivo = $("#motivoContactoModal").val()
    var text = $("#textContactoModal").val()
    //var check = $("#exampleCheck1ReservaModal").prop("checked");

    //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
    if(nombre.trim() === ""){
        var alertDiv = createAlert('El campo nombre es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }else if(correo == "" || correo == null){
        // alert("El campo correo es obligatorio")
        var alertDiv = createAlert('El campo correo es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }else if(telefono == ""){
        // alert("El campo telefono es obligatorio")
        var alertDiv = createAlert('El campo telefono es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }else if(fecha == ""){
        // alert("El campo fecha es obligatorio")
        var alertDiv = createAlert('El campo fecha es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }else if(motivo == ""){
        // alert("El campo hora es obligatorio")
        var alertDiv = createAlert('El campo motivo es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }else if(text == ""){
        // alert("El campo asistentes es obligatorio")
        var alertDiv = createAlert('El campo motivo es obligatorio');
        modal.appendChild(alertDiv);
        // limpiar ultimo appended alert despues de 3 segundos
        delayedClearLastAlert(3000);
        return false;
    }
    // $("#exampleModal").modal("hide");
})

// Crear un nuevo elemento de alerta
function createAlert(message) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger';
    alertDiv.textContent = message;
    return alertDiv;
} 
// Obtener el elemento por id reservaModal
var modal = document.getElementById('contactoModal');

// Función para borrar la última alerta añadida
function clearLastAlert() {
    var lastAlert = modal.querySelector('.alert');
    if (lastAlert) {
        lastAlert.remove();
    }
}
// Función para llamar a la función clearLastAlert después de un retraso especificado
function delayedClearLastAlert(delay) {
    setTimeout(function() {
      clearLastAlert();
    }, delay);
  }






 $("#submitReservaModal").click(function(e) {
        //Evitando cualquier evento por default que tenga el formulario
        e.preventDefault();
        console.log("Submit event ejecutado");

        //Obteniendo los valores de los input del html, para el formulario de reserva
        //Se estan obteniendo a traves del id
        var nombre = $("#nombreReservaModal").val();
        var correo = $("#correoReservaModal").val();
        var telefono = $("#telefonoReservaModal").val()
        var fecha = $("#fechaReservaModal").val()
        var hora = $("#tefonoReservaModal").val()
        var asistentes = $("#asistentesReservaModal").val()
        var check = $("#exampleCheck1ReservaModal").prop("checked");

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if(nombre.trim() === ""){
            var alertDiv = createAlert('El campo nombre es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(correo == "" || correo == null){
            // alert("El campo correo es obligatorio")
            var alertDiv = createAlert('El campo correo es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(telefono == ""){
            // alert("El campo telefono es obligatorio")
            var alertDiv = createAlert('El campo telefono es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(fecha == ""){
            // alert("El campo fecha es obligatorio")
            var alertDiv = createAlert('El campo fecha es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(hora == ""){
            // alert("El campo hora es obligatorio")
            var alertDiv = createAlert('El campo hora es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else if(asistentes == ""){
            // alert("El campo asistentes es obligatorio")
            var alertDiv = createAlert('El campo asistentes es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }
        // $("#exampleModal").modal("hide");
    })

    // Crear un nuevo elemento de alerta
    function createAlert(message) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger';
        alertDiv.textContent = message;
        return alertDiv;
    } 
    // Obtener el elemento por id reservaModal
    var modal = document.getElementById('reservaModal');

    // Función para borrar la última alerta añadida
    function clearLastAlert() {
        var lastAlert = modal.querySelector('.alert');
        if (lastAlert) {
            lastAlert.remove();
        }
    }
    // Función para llamar a la función clearLastAlert después de un retraso especificado
    function delayedClearLastAlert(delay) {
        setTimeout(function() {
          clearLastAlert();
        }, delay);
      }