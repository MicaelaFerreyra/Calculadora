function agregar(valor) {
  document.getElementById("pantallita").value += valor;
}

function borrar() {
  document.getElementById("pantallita").value = "";
}

function calcular() {
  const valorPantallita = document.getElementById("pantallita").value;
  const resultado = eval(valorPantallita);
  document.getElementById("pantallita").value = resultado;
}
