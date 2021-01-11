//MODO OSCURO
$("#darkMode").click(function(){
    $("#header").css("background", "#38690a"/*color verde oscuro*/);
    $("#contenedor").css("background", "#171c26"/*color modo oscuro*/);
    $("#pieFooter").css("background", "#38690a");
    $("#body").css("background", "#171c26");
    $(".men li").css("background", "#171c26");
    $(".men li a").css("background", "#171c26");
    $(".men li a").css("color", "white");
    $(".fa-search").css("color","#171c26");
    $(".letra").css("color","white");
    $("#figcaption").css("color","#61BD0D");
    $(".boton").css("background","#38690a");
    $(".men li a").hover(function(){
    $(this).css("background", "#61BD0D");
    },function(){
    $(this).css("background", "none");
    })
})
$("#darkMode").dblclick(function(){
    $("#header").css("background", "#61BD0D");
    $("#contenedor").css("background", "white");
    $("#pieFooter").css("background", "#61BD0D");
    $("#body").css("background", "white");
    $(".men li").css("background", "white");
    $(".men li a").css("color", "#878585");
    $(".fa-search").css("color","#bbb");
    $(".letra").css("color","black");
    $("#figcaption").css("color","#61BD0D");
    $(".boton").css("background","#61BD0D");
    $(".men li a").hover(function(){
    $(this).css("background", "black");
    $(this).css("background", "white");
    },function(){
    $(this).css("color","#0d0e0d");    
    $(this).css("background", "white");
    })
})
/*======= EVENTO EN LOGO ======*/
 $(".logo").mouseover(function(){
    $(this).css("opacity","0.5");
})
$(".logo").mouseout(function(){
   $(this).css("opacity","1");
})

/*==== EVENTO DE LOGO FACEBOOK ======*/ 
$("img.face").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transform","scale(1)");
})

/*==== EVENTO DE LOGO INSTAGRAM ======*/ 
$("img.instagram").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transform","scale(1)");
})

/*==== EVENTO DE LOGO TWITTER ======*/ 
$("img.twitter").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transform","scale(1)");
})

/*==== EVENTO DE LOGO CARRITO DE COMPRA ======*/ 
$("img.carritoCompra").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transform","scale(1)");
})

/*==== EVENTO DE LOGO EMAIL ======*/ 
$("img.email").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transform","scale(1)");   
})

/*===== EVENTO SLIDER HEADER =====*/
var item=["../img/banner_01.jpg","../img/banner_02.jpg","../img/banner_03.jpg","../img/banner_04.jpg"];
var i=0;

function banner(){
   $("#idIMG").attr("src", item[i]);
   i++;
   if(i>=item.length)i=0;
   estado=setTimeout(banner, 2500);
}
banner();

/*EVENTO MOUSEOVER Y MOUSEOUT EN BOTONES 'PLAY' Y 'STOP'*/
$("#play").mouseover(function(){
   $("#play").css("opacity","1");
})
$("#play").mouseout(function(){
   $("#play").css("opacity","0.3");
})

$("#stop").mouseover(function(){
   $("#stop").css("opacity","1");
})
$("#stop").mouseout(function(){
   $("#stop").css("opacity","0.3");
})

$("#stop").click(function(){
   clearTimeout(estado);
   estado=null;  
})

/*EVENTO CLICK EN LA ETIQUETA IDNETIFICADOR PLAY*/
$("#play").click(function(){
     if(estado==null)
     banner();  
})

//===== EVENTOS PARA BOTONES DE PRODUCTOS =====
var arregloBoton = $(".boton");
    for(var i = 0 ; i <arregloBoton.length ; i++ ){
        arregloBoton[i].onmouseover=function(){
        this.style="background:black";
        this.value="COMPRAR";
    }
        arregloBoton[i].onmouseout=function(){
        this.style="background:#61BD0D";
        this.style="border-radius:3px";
        this.style="font-weight:300";
        this.value="LO QUIERO!!";
    }
}

/*========= EVENTO PARA ABRIR VENTANA EMERGENTE ==========*/
$(".boton").click(function(){
    $("#idPopup").css("display","block");

})
$("#cerrar").click(function(){
    $("#idPopup").css("display","none");
})

//===== EVENTOS PARA IMÁGENES DE PRODUCTOS =====
var arregloImgPro = $(".imgPro");
    for(var i = 0 ; i <arregloImgPro.length ; i++ ){
        arregloImgPro[i].onmouseover=function(){
        this.style="transition:all 2s";    
        this.style="opacity:0.8";
    }
        arregloImgPro[i].onmouseout=function(){
            this.style="transition:1s all";
        this.style="opacity:1";
    }
}
/**======== EVENTO BOTON DE CONFIRMAR COMPRA ========= */
$("#idConfirmar").on("click",function(){
    var n,a,d,t;
    n=$("#idNombre").value;
    a=$("#idApellido").value;
    d=$("#idDireccion").value;
    t=$("#idTelefono").value;
    alert("Señor(a): "+"\n"+n+"\n"+a+"\nSus datos fueron validados, nos contactaremos con Ud.,\npara continuar con la compra. \nQue tenga un buen día!!");  
 })


