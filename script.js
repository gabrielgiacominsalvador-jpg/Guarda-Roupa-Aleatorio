function revelarMensagem() {
    document.getElementById("mensagem").innerText = "Olá, você alterou a mensagem chamando uma função JS"
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;

    document.getElementById("resultadoNome").innerText = "Bem-vindo, " + nome + "!";
}
