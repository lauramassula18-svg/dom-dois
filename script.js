// ===== Seleções =====
const caixas = document.querySelectorAll(".caixa");
const botaoPrincipal = document.getElementById("botao-principal");
const botaoSecundario = document.getElementById("botao-secundario");

// ===== 1. Clicar em uma caixa: borda verde =====
caixas.forEach(function (caixa) {
  caixa.addEventListener("click", function () {
    caixa.style.border = "3px solid green";
  });
});

// ===== 2. Botão secundário: todas as caixas perdem a borda =====
botaoSecundario.addEventListener("click", function () {
  caixas.forEach(function (caixa) {
    caixa.style.border = "none";
  });
});

// ===== 3. Botão principal: todas as caixas ficam com borda azul =====
botaoPrincipal.addEventListener("click", function () {
  caixas.forEach(function (caixa) {
    caixa.style.border = "3px solid blue";
  });
});

