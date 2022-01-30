"use strict";

var boton1 = window.document.getElementById("boton1");
var boton2 = window.document.getElementById("boton2");

// Evento del primer ejercicio
boton1.addEventListener("click", () => {
  document.getElementById("Span1ResultadoHTML").innerHTML = calcSizeCharacters(`${document.getElementById("input1").value}`);
});

// Evento del segundo ejercicio
boton2.addEventListener("click", () => {
  document.getElementById("Span2ResultadoHTML").innerHTML = RecortarCaracter(`${document.getElementById("input2").value}`, parseInt(`${document.getElementById("input3").value}`));
});




function RecortarCaracter(texto, longi) {
  return `The cut text is: <span class="subrayado">${texto.slice(0, longi)}</span>.`;
}

function calcSizeCharacters(palabra) {
  if (isNaN(palabra)) {
    return `The word <span class="subrayado">${palabra}</span> has ${palabra.length} characters.`;
  } else {
    alert("Por favor introducir un texto.");
  }
}