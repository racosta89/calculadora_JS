//funcion donde muestra en pantalla//
function mostrar(valor){
  document.getElementById("pantalla").value +=valor;
}

//funcion que borra la pantalla//

function borrar(){
  document.getElementById('pantalla').value ='';
}

// funcion para borrar un número//

function back() {
  let pantalla = document.getElementById('pantalla').value;

  if (pantalla.length > 0) {
    pantalla = pantalla.slice(0, -1);
    document.getElementById('pantalla').value = pantalla;
  }
}



//Calculos Suma-Resta-Multiplicacion-División//

function calcular(){
  let pantaresultado = document.getElementById('pantalla').value
  let total = eval(pantaresultado)
  document.getElementById('pantalla').value = total
}
