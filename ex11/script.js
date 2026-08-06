function gerarContagem() {
  let limiteDigitado = document.getElementById("limite").value;
  let mensagem = document.getElementById("mensagem");
  let resultado = document.getElementById("resultado");

  resultado.innerText = "";

  if (limiteDigitado === "") {
    mensagem.innerText = "Digite o número final da contagem.";
    mensagem.style.color = "#b3261e";
    return;
  }

let limite = Number (limiteDigitado);

if (limite < 1 || limite > 100) {
    mensagem.innerText = "Digite um número entre 1 e 100.";
    mensagem.style.color = "#b3261e";
    return;
  }
