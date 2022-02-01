"use strict";

// Variables hechas por brandon, para mi mi primer bloque
var primerBloque__Boton1 = document.getElementById("primerBloque__Boton1");
var boton2 = document.getElementById("boton2");

// Evento del primer ejercicio
primerBloque__Boton1.addEventListener("click", () => {
  document.getElementById("primerBloque__resultado").innerHTML =
    calcSizeCharacters(
      `${document.getElementById("primerBloque__Input1").value}`
    );
});

// Evento del segundo ejercicio
boton2.addEventListener("click", () => {
  document.getElementById("Span2ResultadoHTML").innerHTML = RecortarCaracter(
    `${document.getElementById("input2").value}`,
    parseInt(`${document.getElementById("input3").value}`)
  );
});

function RecortarCaracter(texto, longi) {
  return `The cut text is: <span class="subrayado">${texto.slice(
    0,
    longi
  )}</span>.`;
}

function calcSizeCharacters(palabra) {
  if (isNaN(palabra)) {
    return `La palabra <span class="subrayado">${palabra}</span> tiene ${palabra.length} caracteres.`;
  } else {
    alert("Por favor introducir un texto.");
  }
}
