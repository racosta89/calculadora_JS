//funcion donde muestra en pantalla//
function mostrar(valor){
  document.getElementById("pantalla").value +=valor;
}

//funcion que borra la pantalla//

function borrar(){
  document.getElementById('pantalla').value = '';
}

//Calculos Suma-Resta-Multiplicacion-División//

function calcular(){
  let pantaresultado = document.getElementById('pantalla').value
  let total = eval(pantaresultado)
  document.getElementById('pantalla').value = total
}