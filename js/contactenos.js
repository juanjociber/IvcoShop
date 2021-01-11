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
    $("span").css("background","#38690a");
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

/*===== EXPRESIÓN REGULAR A FORMULARIO ======*/ 
var expNombre=/^[a-zA-Z\s\ñ\Ñ\á\é\í\ó\ú\Á\É\Í\Ó\Ú]{8,25}$/;
var expEmail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var expFono=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
var expDistrito=/^[a-zA-Z\s\ñ\Ñ\á\é\í\ó\ú\Á\É\Í\Ó\Ú]{8,25}$/;
var expAsunto=/^[a-zA-Z\s\ñ\Ñ\á\é\í\ó\ú\Á\É\Í\Ó\Ú]{8,25}$/;
var expArea=/^[\s\S]{0,100}$/;

//VARIABLES BOOLEAN PARA VALIDACIÓN
var eNombre=false,eEmail=false,eFono=false,eDistrito=false,
    eAsunto=false,eArea=false;

document.getElementById("btnEnviar").onclick=function(){
    var nom,email,fono,distrito,asunto,area;
    nom=document.getElementById("idNombre").value;
    email=document.getElementById("idEmail").value;
    fono=document.getElementById("idFono").value;
    distrito=document.getElementById("idDistrito").value;
    asunto=document.getElementById("idAsunto").value;
    area=document.getElementById("idArea").value;

	//VALIDAR CAMPO NOMBRE
	if(nom==""){
		alert("campo NOMBRE es obligatorio");
		document.getElementById("idNombre").focus();
	}
	else{
		//validar usando la expresión regular "expNombre"
		if(expNombre.test(nom)==false){
			alert("campo NOMBRE debe contener letras entre 8 y 25 caracteres");
			document.getElementById("idNombre").focus();		
        }
        else
            eNombre=true;
    }
    //VALIDAR CAMPO EMAIL
    if(email==""){
		alert("campo EMAIL es obligatorio");
		document.getElementById("idEmail").focus();
	}
	else{
		//validar usando la expresión regular "expEmail"
		if(expEmail.test(email)==false){
			alert("campo EMAIL de tener formato: usuario@example.com");
			document.getElementById("idEmail").focus();		
        }
        else
            eEmail=true;
    }
    //VALIDAR TELEFONO
    if(fono==""){
		alert("campo TELEFONO es obligatorio");
		document.getElementById("idFono").focus();
	}
	else{
		//validar usando la expresión regular "expFono"
		if(expFono.test(fono)==false){
			alert("campo TELEFONO de tener formato: xxx-xxx-xxx de 9 dígitos");
			document.getElementById("idFono").focus();		
        }
        else
            eFono=true;
    }
    //VALIDAR DISTRITO
    if(distrito==""){
		alert("campo DISTRITO es obligatorio");
		document.getElementById("idDistrito").focus();
	}
	else{
		//validar usando la expresión regular "expDistrito"
		if(expDistrito.test(distrito)==false){
			alert("campo DISTRITO debe contener letras entre 8 y 25 caracteres");
			document.getElementById("idDistrito").focus();		
        }
        else
            eDistrito=true;
    }
    //VALIDAR ASUNTO
    if(asunto==""){
		alert("campo ASUNTO es obligatorio");
		document.getElementById("idAsunto").focus();
	}
	else{
		//validar usando la expresión regular "expAsunto"
		if(expAsunto.test(asunto)==false){
			alert("campo ASUNTO debe contener letras entre 8 y 25 caracteres");
			document.getElementById("idAsunto").focus();		
        }
        else
            eAsunto=true;
    }
    //VALIDAR TEXTAREA
    if(area==""){
		alert("campo MENSAJE es obligatorio");
		document.getElementById("idArea").focus();
	}
	else{
		//validar usando la expresión regular "expArea"
		if(expArea.test(area)==false){
			alert("campo MENSAJE debe contener letras entre 0 y 100 caracteres");
			document.getElementById("idArea").focus();		
        }
        else
            eArea=true;
    }
    //MOSTRAR MENSAJE VALIDACIÓN CORRECTA
    if(eNombre==true && eEmail==true && eFono==true && eDistrito==true && eAsunto==true && eArea==true)
        confirm("Estás seguro con enviar mensaje?")
        alert("Validamos tu mensaje, estaremos en contacto contigo...")    
    
}

//EVENTO AL TEXAREA: DETERMINAN CANTIDAD DE CARACTERES A INGRESAR.
var comentario=document.getElementById("idArea");
    var max=100;
function validar(){
	var contenido=comentario.value;
	var longitud=contenido.length;
		if(longitud>max){
			contenido=contenido.substring(0,max);
			longitud=max;
		}
	comentario.value=contenido;
	document.getElementById("idRestante").innerHTML=max-longitud; //referenciando la etiqueta "p" de 'id=idRestante'
}	
comentario.addEventListener("keydown",validar);
comentario.addEventListener("keyup",validar);