//EVENTO MENU RESPONSIVE:
var abrir = document.getElementById('open');
var menu = document.getElementById('nav');
var cerrado = true;

abrir.addEventListener('click',aperturar);

function aperturar(){
    if(cerrado){
        menu.style.width = '50%';
        cerrado=false;
    }else{
        menu.style.width ='0%';
        menu.style.overflow = 'hidden';
        cerrado=true;
    }
}
window.addEventListener('resize',res)
function res(){
    if(screen.width > 767){
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
}