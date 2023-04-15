//Obtener elementos de id tabla y contenido
var tabla = document.getElementById("tabla");
var contenido = document.getElementById("contenido");

//consumo de api con fetch
fetch("https://digimon-api.vercel.app/api/digimon")
.then(response => response.json())
.then(data =>{
    //console.log(datos);
    mostrartabla(data);//invocando la funcion mostrarbabla()
}).catch(error => console.log(error))

//funcion para obtener los datos del digimon y mostrarlo en tabla con id de tabla y id de contenido
function mostrartabla(response){
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

