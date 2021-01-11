//Evento para abrir ventana emergente
document.getElementById("idBtn").addEventListener("click",function(){
    document.getElementById("idPopup").style.display="block";
})
document.getElementById("cerrar").addEventListener("click",function(){
    document.getElementById("idPopup").style.display="none";
})




/*
document.querySelector("#overlay img").src = "img/promocion-cuentaregresiva.jpg";
    document.querySelector("#overlay #descripcion").innerHTML = "1 Pollo + Inca Kola <span>s/30.9</span> ";*/



/*
//asignar click a la clase "marco"
$(".boton").click(function(){
    //obtener atributo "data-id" de la IMG actual
    var id;
    id=$(this).attr("data-id");
    contador=parseInt(id)+1;
    //animacion de salida	
    $("#imganimal").fadeOut(500,function(){
        //mostrar img
        $("#imganimal").attr("src","img/animales/animal"+contador+".png");
        //mostrar nombre "arranimal"
        $("#txtanimal").text(arranimal[contador-1]);
        //animación de entrada
        $("#imganimal").fadeIn(500);
    })

})*/