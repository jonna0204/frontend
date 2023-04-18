//Obtener elementos de id tabla y contenido
var tabla = document.getElementById("tabla");
var contenido = document.getElementById("contenido");


//consumo de api con fetch
fetch("https://digimon-api.vercel.app/api/digimon")
.then(response => response.json())
.then(data =>{
    //console.log(datos);
    mostrarTabla(data);//invocando la funcion mostrarbabla()
}).catch(error => console.log(error))

//funcion para obtener los datos del digimon y mostrarlo en tabla con id de tabla y id de contenido
function mostrarTabla(response){
    contenido.innerHTML = "";
    //recorrer datos obtenidos en la api
    //console.log(response)
    for(let temp of response){
        contenido.innerHTML +=
        `<td>${temp.name}</td>
        <td><img src="${temp.img}" alt="" width="80px" height="80px"></td>
        <td>"${temp.level}"</td>
        `

        console.log(temp.name);
        
    }

}


//funcion para obtener datos de digimon y mostrarle en la div con id carta
//utilizando metodo fetch y el id de busqueda en el input
function mostrarCarta(){
    //obtener el valor del input con el id de busqueda
    let busqueda = document.getElementById("busqueda").value.tolowerCase();

    //consumo de api con fetch
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${"busqueda"}`)
    .then(response => response.json())
    .then(data =>{
        //console.log(datos);
        construirCarta(data);//invocando la funcion carta()
    }).catch(error => console.log(error))
}

function construirCarta(params){
    //ocultar tabla y tbody de la tabla
    document.getElementById("tabla").style.display = "none";
    document.getElementById("contenido").style.display ="none";
    tabla.innerHTML = "";
    contenido.innerHTML = "";
    carta.innerHTML = "";
    for(let temp of params){
        carta +=
        `<div class="card col-sm-12 co-md-6 mx-auto" style="width: 18rem;">
            <img src="${temp.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${temp.name}</h5>
                <p class="card-text">${temp.level}</p>
            </div>
        </div>
  
        `

    }

}

