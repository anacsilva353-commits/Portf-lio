function logar() {
    var login = document.getElementById("login").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var usuarios = ["admin@senai", "prof@email"];

    if (usuarios.includes(login) && senha === "123") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    } else {
        alert("Login ou senha incorretos!");
    }
}

function cancelar() {
    var campoLogin = document.getElementById("login");
    var campoSenha = document.getElementById("senha");

    campoLogin.value = "";
    campoSenha.value = "";
    campoLogin.focus();
}
