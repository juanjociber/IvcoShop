//MODO OSCURO
$("#darkMode").click(function(){
    $("#header").css("background", "#38690a"/*color verde oscuro*/);
    $("#contenedor").css("background", "#171c26"/*color modo oscuro*/);
    $("#pieFooter").css("background", "#38690a");
    $("#body").css("background", "#171c26");
    $(".men li").css("background", "#171c26");
    $(".men li a").css("background", "#171c26");
    $(".men li a").css("color", "white");
    $(".letra").css("color","white");
    $(".verde").css("color","#38690a");
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

/*===== EVENTO SLIDER ASIDE =====
var arregloAside=["../img/sliderEmpresa1.jpg","../img/sliderEmpresa2.jpg","../img/sliderEmpresa3.jpg",
                  "../img/sliderEmpresa9.jpg","../img/sliderEmpresa9.jpg","../img/sliderEmpresa4.jpg"];
var j=0;

function corredizo(){
   $("#idAside").attr("src", arregloAside[j]);
   j++;
   if(j>=arregloAside.length)j=0;
   tiempo=setTimeout(corredizo, 2500);
}
corredizo();*/

//======= Evento icono de Web Site usando JSON ========
$("#cursoIMG").children("img").animate({"left":"770px"},1000);
/*======== Slider haciendo uso de método: 'fadeOut' y 'fadeIn' =========*/
var arAside=["Equipos de computo","Los mejores Antivirus","Laptops de última generación","Smartphone de calidad","Impresonas Multifuncionales"];
var c = 0;
//asignando click al ID "idSiguiente"
	$("#idSiguiente").click(function(){
		c++;
		//validar contador
		if(c>=5)
			c=5;
		//animación de salida
		$("#idAside").fadeOut(1000,function(){
			//mostrar img
			$("#idAside").attr("src","../img/sliderEmpresa"+c+".jpg");
			//mostrar descripción de imagen
			$("#idDescripcion").text(arAside[c-1]);
			//animación de entrada
			$("#idAside").fadeIn(1000);
		})
	})
	//asignando click al ID "idAnterior"
	$("#idAnterior").click(function(){
		c--;
		//validar contador
		if(c<1)
			c=1;
		//animación de salida
		$("#idAside").fadeOut(500,function(){
			//mostrar img
			$("#idAside").attr("src","../img/sliderEmpresa"+c+".jpg");
			//mostrar descripción de iamgen
			$("#idDescripcion").text(arAside[c-1]);
			//animación de entrada
			$("#idAside").fadeIn(500);
		})
    })
//evento de imágenes usando JSON
$(".marco").mouseover(function(){
    $(this).css({"opacity":"0.5","transform":"scale(1.2)","transition":"all 2s"});
})
$(".marco").mouseout(function(){
    $(this).css({"opacity":"1","transform":"scale(1)","transition":"all 0.5s"});
})
//asignar click a la clase "marco"
$(".marco").click(function(){
    //obtener atributo "data-id" de la IMG actual
    var id;
    id=$(this).attr("data-id");
    c=parseInt(id)+1;
    //animacion de salida	
    $("#idAside").fadeOut(500,function(){
        //mostrar img
        $("#idAside").attr("src","../img/sliderEmpresa"+c+".jpg");
        //mostrar descripción imagen
        $("#idDescripcion").text(arAside[c-1]);
        //animación de entrada
        $("#idAside").fadeIn(500);
    })

})

/*====== EVENTOS PARA TITULO ========*/
$(".titulo").hover(function(){
    $(this).css("text-shadow","black 1px 1px 25px");
    $(this).css("font-weight","bold");
    $(this).css("transition","all 1s");
    $(this).css("transform","scale(1.2)");
},function(){
    $(this).css("text-shadow","none");
    $(this).css("transform","scale(1)");
    $(this).css("color","#61BD0D");
})

/*====== EVENTOS PARA TITULO ========*/
$(".parrafo").hover(function(){
    $(this).css("color","black");
    $(this).css("transition","all 1s");
    
},function(){
    $(this).css("color","#696666");
    $(this).css("background","white");
})

/*EVENTO BOTON*/
$(".aviso").mouseover(function(){
    $(".aviso").css("background","blue");
    $(".aviso").css("border-radius","2px");
    $(".aviso").css("color","yellow");
})
$(".aviso").mouseout(function(){
    $(".aviso").css("background","#2f4963");
    $(".aviso").css("border-radius","2px");
    $(".aviso").css("color","white");
    $(".aviso").css("text-shadow","#babd1c 1px 1px 7px");
    $(".aviso").css("box-shadow","black 1px 1px 9px");
    
})
 
