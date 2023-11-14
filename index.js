const botones = document.querySelectorAll(".button");
const operator = document.querySelectorAll(".operador");

function mostrar(valor) {
  let panta = document.getElementById("pantalla").textContent;
  panta += valor;

  document.scrollingElement("pantalla").textContent = pantalla;
}

