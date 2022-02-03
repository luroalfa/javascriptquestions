"use strict";

// Variables hechas por brandon, para mi mi primer bloque
var primerBloque__Boton1 = document.getElementById("primerBloque__Boton1");
// Variables hechas por luis, para mi mi primer bloque
var segundoBloque_boton = window.document.getElementById("segundoBloque_boton");

// Evento del primer ejercicio
primerBloque__Boton1.addEventListener("click", () => {
  document.getElementById("primerBloque__resultado").innerHTML =
    calcSizeCharacters(
      `${document.getElementById("primerBloque__Input1").value}`
    );
});



// Evento del segundo ejercicio Luis Rodriguez
segundoBloque_boton.addEventListener("click", () => {
  let texto = `${document.getElementById("segundoBloque_input1").value}`;
  let longi = parseInt(`${document.getElementById("segundoBloque_input2").value}`);
  document.getElementById("segundoBloque_resultado").innerHTML = RecortarCaracter(texto, longi);
});





//Funcion generada para el ejercicio #1
function calcSizeCharacters(palabra) {
  if (isNaN(palabra)) {
    return `La palabra <span class="subrayado">${palabra}</span> tiene ${palabra.length} caracteres.`;
  } else {
    alert("Por favor introducir un texto.");
  }
};


//Funcion generada para el ejercicio #2
function RecortarCaracter(texto, longi) {
  if (!texto) {
    alert("Por favor ingresar una palabra para recortarla.");
  } else if (!longi) {
    alert("Por favor ingresar la cantidad a recortar");
  } else {
    return `El texto recortado es: <span class="subrayado">${texto.slice(0, longi)}</span>.`;
  }
};



// Inicializo variables boton para manejar el evento 
var decimoBloque_boton = document.getElementById("decimoBloque_boton");
var decimoBloque_resultado = document.getElementById("decimoBloque_resultado");
// Evento disparador en espera de algun evento del ejercicio #10
decimoBloque_boton.addEventListener("click", () => {
  let decimoBloque_input1 = `${document.getElementById("decimoBloque_input1").value}`;
  console.log(buscarCapicua(decimoBloque_input1));;
});


const buscarCapicua = (numero = 0) => {
  if (!numero) return "Por favor ingresar un numero.";

  let alreves = numero.toString().split("").reverse().join("");
  if (alreves === numero) {
    decimoBloque_resultado.innerHTML = `El número ingresado <span class="subrayado">${numero}</span>. SI es Capicúa.`;
  } else {
    decimoBloque_resultado.innerHTML = `El número ingresado <span class="subrayado">${numero}</span>. NO es Capicúa.`;
  }
};