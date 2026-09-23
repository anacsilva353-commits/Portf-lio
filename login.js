function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin@senai", "prof@email" && senha == "123") {

        alert("Login realizado com sucesso!");

        window.location.href = "home.html";
    }


else  if (login == "admin@senai" && senha == "123") {

    alert("Login realizado com sucesso!");
    
    window.location.href = "home.html";
}

else{
    alert("Login ou senha incorretos!");
}
}