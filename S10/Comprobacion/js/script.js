/*
function mostrar(){
    //nombrar o modificar un elemento por id
    document.getElementById("text2").style.display = "block";
}

function ocultar(){
    document.getElementById("text2").style.display = "none";
}

function agrandar(){
    
    document.getElementById("img").style.width = "100%"
}

function achicar(){
    document.getElementById("img").style.width = "20%"
}

function letra(){
    document.getElementById("letra").style.fontSize = "32px"
}

function letrachica(){
    document.getElementById("letra").style.fontSize = "1em"
}
*/

//para ejecutar la jquery luego que el documento cargue
$(document).ready(function(){
    //cuando el doc. este listo, se ejecutan otras funciones o eventos
    $("#text1").hover(function(){
        $("#text2").toggle()
    })

    $("img").click(function(){
        $("#img").css({width:"100%"})
    })

    $("img").mouseout(function(){
        $("#img").css({width:"20%"})
    })


    $("#caja3").dblclick(function(){
        $("#caja3").css("font-size","32px")
    })

    $("#caja3").mouseout(function(){
        $("#caja3").css("font-size","16px")
    })
});


// https://www.w3schools.com/jquery/jquery_ref_events.asp PG JQUERY
