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
    $(".tituloMarca").css("color","white")
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
/*====== EVENTO A LOGO ========*/
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

/**=============================================
* EVENTO A SLIDER DE HEADER - BANNER
* =============================================*/
var item=["./img/banner_01.jpg","./img/banner_02.jpg","./img/banner_03.jpg","./img/banner_04.jpg","./img/banner_05.jpg"];
var i=0;
function banner(){
   $("#idIMG").attr("src", item[i]);
   i++;
   if(i>=item.length)i=0;
   estado=setTimeout(banner,3000);
}
banner();
//ASIGNADO EVENTO A CIRCULOS
$(".circulo").click(function(){
    //Obtiene valor de enlace donde se ejecuta el click
    var num;
    num=$(this).text();
    //Muestra imagen segun número
    $("#idIMG").attr("src",item[num-1]);
})
//ASIGNANDO EVENTO: 'mouseover' y 'mouseout' A BOTONES 'Play' y 'Stop'
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
//asignar evento click a la etiqueta identifador "play"
$("#play").click(function(){
      if(estado==null)
      banner();  
 })

/**=============================================
* EVENTO A SLIDER DE ETIQUTEA 'ASIDE'
* =============================================*/
var items2=["./img/aviso1.jpg","./img/aviso2.jpg","./img/aviso3.jpg"];
var j=0;

function banner2(){
    $("#slider").attr("src", items2[i]);
    j++;
    if(j>=items2.length)j=0;
    estado=setTimeout(banner2,1500);
}
banner2();

/*==== EVENTO CON 'mouseover' Y 'mouseout'=====*/
$("#slider").mouseover(function(){
    $(this).css("filter","grayscale(1)")
})
$("#slider").mouseout(function(){
    $(this).css("filter","unset")
})

/**=============================================
* EVENTO FEHA Y HORA DE WEB SITE
* =============================================*/
n =  new Date();
y = n.getFullYear();
p = n.getMonth()+1;
d = n.getDate();
h = n.getHours();
m = n.getMinutes();
var tiempo="Hrs.";
var mes=(p<10)?'0'+p:p;
var minuto=(m<10)?'0'+m:m;
var hora=(h<10)?'0'+h:h;

document.getElementById("saludo").innerText = "Fecha de ingreso : "+d+"/"+mes+"/"+y+"\nHora de ingreso : "+hora+":"+minuto+" "+tiempo;

/**=============================================
* EVENTO DE LOGO IVCO
* =============================================*/
$("#logo").animate({"top":"20px"},1000);

/**=============================================
 * EVENTOS DE IMÁGENES DE ETIQUETA 'SECTION'
 * =============================================*/
$(".box").mouseover(function(){
    $(this).css('background','#3C3B3F');
    $(this).css('background','-webkit-linear-gradient(to right, #605C3C, #3C3B3F)');
    $(this).css('background','linear-gradient(to right, #605C3C, #3C3B3F)');
    $(this).children("img").css("transition","all 1.3s");
    $(this).children("img").css("width","0");
    $(this).children("article").children("a").css("font-size","2.3em");
    $(this).children("article").children("a").css("color","white");
    $(this).children("article").children("a").css("font-weight","800");
    $(this).children("article").children("a").css("text-shadow","yellow 1px 1px 6px");
})
$(".box").mouseout(function(){
    $(this).css("background","white");
    $(this).css("opacity","1");
    $(this).children("img").css("transition","all 1.3s");
    $(this).children("img").css("width","100%");
    $(this).children("article").children("p").css("font-size","0em");
})

/**=============================================
 * EVENTOS DE LOGOS DE ETIQUETA 'SECTION'
 * =============================================*/
var arregloIco = document.getElementsByClassName("imgICO");
    for(var i = 0 ; i <arregloIco.length ; i++ ){
        arregloIco[i].onmouseover=function(){
        this.style="filter:unset; transform: scale(1.2)";
    }
        arregloIco[i].onmouseout=function(){
        this.style="opacity: 1";
    }
}

/**=============================================
* EVENTO A LOGOS DE EMPRESA
* =============================================*/
$("img.marca").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transform","scale(1.2)");
    $(this).css("transition","all 1s ease-in-out");
    $(this).css("transform","rotate(360deg)");
},function(){
    $(this).css("filter","grayscale(1)");
    $(this).css("transition","all 1s ease-in-out");
    $(this).css("transform","rotate(-360deg)");
    
})

/**=============================================
* EVENTO QUE REDIRECCIONA A RED SOCIAL
* =============================================*/
$("#idFace").click(function(){
    $(location).attr('href','https://www.facebook.com/');
})
$("#idTwitter").click(function(){
    $(location).attr('href','https://twitter.com/?lang=es');
})
$("#idInstagram").click(function(){
    $(location).attr('href','https://www.instagram.com/');
})