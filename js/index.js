"use strict";

// Declaro mi objeto de objetivos del grupo
const objetivoDelGupo = {
  obj1: "1) Resolver problemas de lógica en JavaScript.",
  obj2: "2) Entrelazar las 3 tecnologías (Html-Css-JavaScript).",
  obj3: "3) Utilizar Git/GitHub para llevar el control de nuestro proyecto grupal.",
  obj4: "4) Hacer el deploy de nuestro proyecto utilizando Netlify.",
  obj5: "5) Resolver en conjunto problemas que se presenten en el camino.",
}
// Inicializo mi constante typed que es una librería llamada Typed
const typed = new Typed('.typed', {
  strings: [
    `<i class="typeStyle">${objetivoDelGupo.obj1}</i>`,
    `<i class="typeStyle">${objetivoDelGupo.obj2}</i>`,
    `<i class="typeStyle">${objetivoDelGupo.obj3}</i>`,
    `<i class="typeStyle">${objetivoDelGupo.obj4}</i>`,
    `<i class="typeStyle">${objetivoDelGupo.obj5}</i>`,
  ],
  typeSpeed: 20, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 2500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato

});



/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#1      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA BRANDON AGUILAR O

// Variables hechas por brandon, para el primer bloque
var primerBloque__Boton1 = document.getElementById("primerBloque__Boton1");
// Evento disparador en espera de algun evento del ejercicio #1
primerBloque__Boton1.addEventListener("click", () => {
  document.getElementById("primerBloque__resultado").innerHTML =
    calcSizeCharacters(
      `${document.getElementById("primerBloque__Input1").value}`
    );
});
//Funcion generada para el ejercicio #1
function calcSizeCharacters(palabra) {
  if (isNaN(palabra)) {
    return `La palabra <span class="subrayado">${palabra}</span> tiene ${palabra.length} caracteres.`;
  } else {
    alert("Por favor introducir un texto.");
  }

}


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#2      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA LUIS RODRIGUEZ

// Variables hechas por luis, para el segundo bloque
var segundoBloque_boton = window.document.getElementById("segundoBloque_boton");
// Evento del segundo ejercicio Luis Rodriguez
segundoBloque_boton.addEventListener("click", () => {
  let texto = `${document.getElementById("segundoBloque_input1").value}`;
  let longi = parseInt(`${document.getElementById("segundoBloque_input2").value}`);
  document.getElementById("segundoBloque_resultado").innerHTML = RecortarCaracter(texto, longi);
});
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





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#3      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA MARIELA GONZALEZ





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#4      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA GABRIEL VEGA





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#5      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA SUSANA VARGAS
//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter.

var bloqueQuinto__Boton = document.querySelector("#bloqueQuinto__Boton");

bloqueQuinto__Boton.addEventListener("click", () => {
  let text = `${document.getElementById("bloqueQuinto__Input1").value}`;
  let arreglo = text.split(" ");

  document.getElementById("bloqueQuinto__Resultado").innerHTML = `El arreglo tiene un tamaño de: 
  <span class="subrayado">${arreglo.length}</span><br>El arreglo es: [${arreglo}]`;
});

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#6      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA IRINA VILLAREAL





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#7      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA JOSE UMAÑA

var bloqueSetimo__boton = document.querySelector('#bloqueSetimo__boton');

bloqueSetimo__boton.addEventListener('click',function(){
  let texto = `${document.getElementById('bloqueSetimo__input1').value}`;
  let string = texto.sort(' ');
  let cadena = texto.reverse();
  document.getElementById('bloqueSetimo__resultado').innerHTML = cadena
});



/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#8      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA EDDIE CAMPOS





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#9      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA FATIMA PEREZ




/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#10      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA LUIS RODRIGUEZ

// Inicializo variables boton para manejar el evento 
var decimoBloque_boton = document.getElementById("decimoBloque_boton");
var decimoBloque_resultado = document.getElementById("decimoBloque_resultado");
var decimoBloque__significado = document.getElementById("decimoBloque__significado");
// Evento disparador en espera de algun evento del ejercicio #10
decimoBloque_boton.addEventListener("click", () => {
  let decimoBloque_input1 = `${document.getElementById("decimoBloque_input1").value}`;
  console.log(buscarCapicua(decimoBloque_input1));;
});
const buscarCapicua = (numero = 0) => {
  if (!numero) return "Por favor ingresar un numero.";

  let alreves = numero.toString().split("").reverse().join("");
  if (alreves === numero) {
    decimoBloque_resultado.innerHTML = `Al derecho <span class="subrayado">${numero}</span>.<br>Al revés <span class="subrayado">${alreves}</span>.<br> <span class="subrayado">SI es Capicúa.</span>`;
  } else {
    decimoBloque_resultado.innerHTML = `Al derecho <span class="subrayado">${numero}</span>.<br>Al revés <span class="subrayado">${alreves}</span>.<br> <span class="subrayado">NO es Capicúa.</span>`;
  }
};

decimoBloque__significado.addEventListener("click", () => {
  alert("En matemáticas:\nLa palabra capicúa (del catalán cap i cua, 'cabeza y cola') se refiere a cualquier número que se lee igual de izquierda a derecha que de derecha a izquierda.");
});


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#11      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA SUSANA VARGAS

/*Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se
   define como el producto de todos los números enteros positivos desde 1 hasta n)Por ejemplo: miFuncion(5)
   devolverá 120.*/

var undecimoBloque_boton = document.getElementById('undecimoBloque_boton');

undecimoBloque_boton.addEventListener('click', function () {

  let num = `${document.getElementById("undecimoBloque_input1").value}`;
  let undecimoBloque_resultado = document.getElementById('undecimoBloque_resultado'),
     factorial = 1;
  
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
    
  }
  undecimoBloque_resultado.innerHTML = `El factorial de ${num} es: <span class"subrayado"> ${factorial}</span> `
});



/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#12      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA BRANDON AGUILAR





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#13      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA GABRIEL VEGA





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#14      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA MARIELA GONZALEZ





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#15      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA IRINA VILLAREAL





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#16      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA EDDIE CAMPOS





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#17      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA FATIMA PEREZ





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#18      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA JOSE UMAÑA





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#19      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA 





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#20      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA 





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#21      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA SUSANA VARGAS
/*Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
  pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
var vigesimoPrimerBloque_boton = document.getElementById('vigesimoPrimerBloque_boton');
var vigesimoPrimerBloque_resultado = document.getElementById('vigesimoPrimerBloque_resultado');
vigesimoPrimerBloque_boton.addEventListener('click', () => {
    let vigesimoPrimerBloque_input1 = `${parseInt(document.getElementById("vigesimoPrimerBloque_input1").value)} `,
      numeros = [],
      cuadrado = [],
      pregunta = parseInt(prompt('Ingrese 5 numeros, a continuación, agregue el primero: '));
      vigesimoPrimerBloque_input1 = pregunta;
      numeros.push(vigesimoPrimerBloque_input1);
      cuadrado.push(Math.pow(vigesimoPrimerBloque_input1,2));
    
      
        for(let i=1; i<=5; i++){
          switch (i){
            case 2:
              pregunta =parseInt(prompt('Ingrese el segundo numero:')) ;
              vigesimoPrimerBloque_input1 = pregunta;
              numeros.push(vigesimoPrimerBloque_input1);
              cuadrado.push(Math.pow(vigesimoPrimerBloque_input1,2));
              break;
            case 3:
              pregunta =parseInt(prompt('Ingrese el tercer numero')) ;
              vigesimoPrimerBloque_input1 = pregunta;
              numeros.push(vigesimoPrimerBloque_input1);
              cuadrado.push(Math.pow(vigesimoPrimerBloque_input1,2));
              break;
            case 4:
              pregunta =parseInt(prompt('Ingrese el cuarto numero')) ;
              vigesimoPrimerBloque_input1 = pregunta;
              numeros.push(vigesimoPrimerBloque_input1);
              cuadrado.push(Math.pow(vigesimoPrimerBloque_input1,2));
              break;  
            case 5:
              pregunta =parseInt(prompt('Ingrese el quinto numero')) ;
              vigesimoPrimerBloque_input1 = pregunta;
              numeros.push(vigesimoPrimerBloque_input1);
              cuadrado.push(Math.pow(vigesimoPrimerBloque_input1,2));
              break;
            default:
              if (i>5){
                alert ('LLegaste al limite');
              }
              break;
            }
          }
      
      
      vigesimoPrimerBloque_resultado.innerHTML = `Los números elevados del array [${numeros}] son: <span class"subrayado"> [${cuadrado}]</span> `
         
});

 


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#22      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA 





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#23      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA 





/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||      BLOQUE#24      |||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
// BLOQUE DE TRABAJO PARA 