//consumiendo datos con fetch api

//obtener el elemento por id boton
var boton = document.getElementById("boton")

//agregar accion o evento click
boton.addEventListener("click",()=>{
    //fetch api o peticion para obtener las frases
    fetch("https://studio-ghibli-films-api.herokuapp.com/api/")
    .then(response => response.json()) //se obtiene el json de la respuesta
    .then(data =>{  //a esos datos se les llama con variable data
        console.log(data) // impresion en consola para verificacion

        //se obtiene el elemento con el id texto donde se inyectara la data obtenida
        var texto = document.getElementById("texto")

        //inyectar valor o texto al elemento obtenido con innerhtml
        texto.innerHTML = data.joke
    }).catch(error => console.log(error))
});



