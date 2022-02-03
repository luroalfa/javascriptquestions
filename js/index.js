"use strict";

var boton1 = window.document.getElementById("boton1");
var boton2 = window.document.getElementById("segundoBloque_boton");

// Evento del primer ejercicio
boton1.addEventListener("click", () => {
  document.getElementById("Span1ResultadoHTML").innerHTML = calcSizeCharacters(`${document.getElementById("input1").value}`);
});



// Evento del segundo ejercicio Luis Rodriguez
boton2.addEventListener("click", () => {
  let texto = `${document.getElementById("segundoBloque_input1").value}`;
  let longi = parseInt(`${document.getElementById("segundoBloque_input2").value}`);
  document.getElementById("segundoBloque_resultado").innerHTML = RecortarCaracter(texto, longi);
});



//Funcion generada para el ejercicio #2
function RecortarCaracter(texto, longi) {
  if (!texto) {
    alert("Por favor ingresar una palabra para recortarla.");
  } else if (!longi) {
    alert("Por favor ingresar la cantidad a recortar")
  } else {
    return `El texto recortado es: <span class="subrayado">${texto.slice(0, longi)}</span>.`;
  }
}

function calcSizeCharacters(palabra) {
  if (isNaN(palabra)) {
    return `The word <span class="subrayado">${palabra}</span> has ${palabra.length} characters.`;
  } else {
    alert("Por favor introducir un texto.");
  }
}