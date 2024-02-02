function change(){
    var i=document.getElementById('icon');
    var pass=document.getElementById('password');
    if(pass.type=="password"){
        password.type="text";
        icon.src="./eye-open.png";
    }
    else{
        password.type="password";
        icon.src="./eye-close.png";
    }
}