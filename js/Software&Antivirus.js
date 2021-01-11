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
    $(this).css("background", "#0d0e0d");
    $(this).css("background", "white");
    },function(){
    $(this).css("color","#0d0e0d");    
    $(this).css("background", "white");
    })
})
//LOGO
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
/*======= PRODUCTO 01 ========*/
$(".boton").mouseover(function(){
    $(".boton").css("background","black");
    $(".boton").css("cursor","pointer");
    $(".boton").css("border-radius","3px");
    $(".boton").css("font-weight","800");
    $(".boton").val("AGREGAR A CARRITO");
})
$(".boton").mouseout(function(){
    $(".boton").css("background","#61BD0D");
     $(".boton").css("border-radius","3px");
     $(".boton").val("COMPRAR");
     $(".boton").css("font-weight","300");
})
/*======= PRODUCTO 02 ========*/
$(".boton1").mouseover(function(){
    $(".boton1").css("background","black");
    $(".boton1").css("cursor","pointer");
    $(".boton1").css("border-radius","3px");
    $(".boton1").css("font-weight","800");
    $(".boton1").val("AGREGAR A CARRITO");
})
$(".boton1").mouseout(function(){
    $(".boton1").css("background","#61BD0D");
     $(".boton1").css("border-radius","3px");
     $(".boton1").val("COMPRAR");
     $(".boton1").css("font-weight","300");
})
/*======= PRODUCTO  ========*/
$(".boton2").mouseover(function(){
    $(".boton2").css("background","black");
    $(".boton2").css("cursor","pointer");
    $(".boton2").css("border-radius","3px");
    $(".boton2").css("font-weight","800");
    $(".boton2").val("AGREGAR A CARRITO");
})
$(".boton2").mouseout(function(){
    $(".boton2").css("background","#61BD0D");
     $(".boton2").css("border-radius","3px");
     $(".boton2").val("COMPRAR");
     $(".boton2").css("font-weight","300");
})
/*======= PRODUCTO 03 ========*/
$(".boton3").mouseover(function(){
    $(".boton3").css("background","black");
    $(".boton3").css("cursor","pointer");
    $(".boton3").css("border-radius","3px");
    $(".boton3").css("font-weight","800");
    $(".boton3").val("AGREGAR A CARRITO");
})
$(".boton3").mouseout(function(){
    $(".boton3").css("background","#61BD0D");
     $(".boton3").css("border-radius","3px");
     $(".boton3").val("COMPRAR");
     $(".boton3").css("font-weight","300");
})