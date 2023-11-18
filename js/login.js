
function loggear(){
    var user = document.getElementById('usr');
    var cont = document.getElementById('pwd');

    if(user=="Carlos" && cont=="Prueba"){
        location.href="/noticias.html";
    }
    else{
        print("Error de usuario o contraseña");
    }

}