//MODO OSCURO
$("#darkMode").click(function(){
    $("#header").css("background", "#38690a"/*color verde oscuro*/);
    $("#contenedor").css("background", "#171c26"/*color modo oscuro*/);
    $("#pieFooter").css("background", "#38690a");
    $("#body").css("background", "#171c26");
    $(".men li").css("background", "#171c26");
    $(".men li a").css("background", "#171c26");
    $(".men li a").css("color", "white");
    $(".Formulario").css("background", "rgb(56, 92, 100)");
    $(".verde").css("color","#61BD0D");
    $("#verde").css("color","#61BD0D");
    $(".buttom1").css("background", "#7a0b0b");
    $(".buttom2").css("background", "#06047a");
    $(".letra").css("color","white");
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

/*EVENTO CLICK EN LA ETIQUETA IDENTIFICADOR PLAY*/
$("#play").click(function(){
     if(estado==null)
     banner();  
})

//EVENTO PARA BOTONES DE 'CANCELAR'E 'INICIAR SESIÓN' DE FORMULARIO
$(".boton1").hover(function(){
    $(this).css("transition","all 1s");
    $(this).css("box-shadow","black 0.5px 0.5px 4px");
    $(this).css("text-shadow","#000000 1px 1px 6px");
    $(this).css("font-weight","700");
},function(){
    $(this).css("background"," #fa6f56");
    $(this).css("color","white");
    $(this).css("box-shadow","none");
    $(this).css("text-shadow","none");
    $(this).css("font-weight","normal");
})

$(".boton2").hover(function(){
    $(this).css("transition","all 1s");
    $(this).css("box-shadow","black 0.5px 0.5px 4px");
    $(this).css("text-shadow","#000000 1px 1px 6px");
    $(this).css("font-weight","700");
},function(){
    $(this).css("background","#4081f0");
    $(this).css("color","white");
    $(this).css("box-shadow","none");
    $(this).css("text-shadow","none");
    $(this).css("font-weight","normal");
})

/*===== EXPRESIÓN REGULAR A LOGIN ======*/ 

var expEmail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var expPassword=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

//VARIABLES BOOLEAN PARA VALIDACIÓN
var eEmail=false,ePassword=false;

document.getElementById("iniciarSesion").onclick=function(){
    var email,password;
    email=document.getElementById("correo").value;
    password=document.getElementById("password").value;

	//VALIDAR CAMPO EMAIL
    if(email==""){
		alert("campo EMAIL es obligatorio");
		document.getElementById("correo").focus();
	}
	else{
		//validar usando la expresión regular "expEmail"
		if(expEmail.test(email)==false){
			alert("campo EMAIL de tener formato: usuario@example.com");
			document.getElementById("correo").focus();		
        }
        else
            eEmail=true;
    }
    //VALIDAR PASSWORD
    if(password==""){
		alert("campo PASSWORD es obligatorio");
		document.getElementById("password").focus();
	}
	else{
		//validar usando la expresión regular "expFono"
		if(expPassword.test(password)==false){
			alert("campo PASSWORD debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y mayúscula. NO puede tener otros símbolos");
			document.getElementById("password").focus();		
        }
        else
            ePassword=true;
    }
    //MOSTRAR MENSAJE VALIDACIÓN CORRECTA
    if(eEmail==true && ePassword==true)
        alert("Bienvenido!!")
            
}

