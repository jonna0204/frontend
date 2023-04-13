var boton = document.getElementById("boton")

//agregar accion o evento click
boton.addEventListener('click',()=>{ //()=> es abreviatura a function(), es una arrow function
    fetch('https://geek-jokes.sameerkumar.website/api?format=json') //obtener api
    .then(response => response.json())//se obtiene el json de la respuesta
    .then(data =>{// a esos datos se le llama con una variable data
        console.log(data)//impresion en consola para verificacion
        //se obtiene el elemento con el id texto, donde se inyectara la data obtenida
        var texto = document.getElementById("texto")
        texto.innerHTML = data.joke //inyectar el valor o texto al elemento obtenido con innerHTML
    }).catch(error => console.log(error))
});

