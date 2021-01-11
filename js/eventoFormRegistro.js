/*===== EVENTO PARA ICONOS =======*/
$("img.ico").hover(function(){
    $(this).css("filter","unset");
    $(this).css("transition","all 1s");
    
},function(){
    $(this).css("filter","grayscale(1)");
})

/*======== EVENTO BOTÓN REGISTRAR ========*/
$("#btnRegistrar").mouseover(function(){
    $("#btnRegistrar").css("transition","all 1s");
    $("#btnRegistrar").css("box-shadow","black 0.5px 0.5px 4px");
    $("#btnRegistrar").css("text-shadow","#000000 1px 1px 6px");
    $("#btnRegistrar").css("font-weight","700");
    $("#btnRegistrar").css("background","black");
    $("#btnRegistrar").val("Solo dale un Click!!");
})
$("#btnRegistrar").mouseout(function(){
    $("#btnRegistrar").css("background","#4081f0");
    $("#btnRegistrar").css("color","white");
    $("#btnRegistrar").css("box-shadow","none");
    $("#btnRegistrar").css("text-shadow","#000000 1px 1px 6px");
    $("#btnRegistrar").css("font-weight","normal");
    $("#btnRegistrar").val("Regístrate");
})

/**====== GENERANDO CONSTRUCTOR DE CLASE Registro"" ======== */
function Registro(nombre,email,password){
    this.nombre=nombre;
    this.email=email;
    this.password=password;
}
Registro.prototype.confirmar=function(){
    //EXPRESIONES REGULARES
    var expN=/^[a-zA-Z\s\ñ\Ñ\á\é]{2,25}$/; 
    var expE=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var expP=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    //VARIABLES BOOLEAN PARA VALIDACIÓN
    var eN=false, eE=false,eP=false;

    //VALIDAR CAMPO NOMBRE
    if(this.nombre=="")
        document.getElementById("idMNombre").innerHTML="Campo NOMBRE es obligatorio";
    else{
        //validar expresiòn regular solo letras
        if(expN.test(this.nombre)==false){//la expresión no coincide en nombres
            document.getElementById("idMNombre").innerHTML="Campo NOMBRE solo letras";
            document.getElementById("idN").focus();
        }	
        else{
            document.getElementById("idMNombre").innerHTML="";
            eN=true;
        }
    }

	//VALIDAR CAMPO EMAIL
    if(this.email=="")
    		document.getElementById("idMEmail").innerHTML="Campo EMAIL es obligatorio";
	else{
		//validar usando la expresión regular "expEmail"
		if(expE.test(this.email)==false){
			document.getElementById("idMEmail").innerHTML="Campo EMAIL de tener formato: usuario@example.com";
            document.getElementById("idN").focus();		
        }
        else{
            document.getElementById("idMEmail").innerHTML="";
            eE=true;
        }
    }
    
    //VALIDAR PASSWORD
    if(this.password==""){
		document.getElementById("idMPassword").innerHTML="Campo PASSWORD es obligatorio";
	}
	else{
		//validar usando la expresión regular "expFono"
		if(expP.test(this.password)==false){
			document.getElementById("idMPassword").innerHTML="Campo PASSWORD debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula y mayúscula. NO puede tener otros símbolos";
            document.getElementById("idP").focus();		
        }
        else{
            document.getElementById("idMPassword").innerHTML="";
            eP=true;
        }
    }
    //MOSTRAR MENSAJE VALIDACIÓN CORRECTA
    if( eN==true && eE==true && eP==true)
        window.location.href="../pag/Login.html";   
}

//ASIGANDO EVENTO A BOTÓN 'btnRegistrar'
document.getElementById("btnRegistrar").addEventListener("click",function(){
    var n,e,p;
    n=document.getElementById("idN").value
    e=document.getElementById("idE").value;
    p=document.getElementById("idP").value;

    if(n=="" && e=="" && p==""){
        alert("DATOS INGRESADOS:"+"\nNombre : "+n+"\nEmail      : "+e+"\n\nLo siento, el sistema no acepta datos nulos");
    }
    else
        alert("DATOS INGRESADOS:"+"\nNombre : "+n+"\nEmail      : "+e+"\n\nSe registraron satisfactoriamente sus datos en el sistema!!");			
        //CREAR OBJETO DE LA CLASE 'Registro'
        var bean=new Registro(n,e,p);
        //INVOCAR LA FUNCION 'confirmar'
        bean.confirmar();
});





