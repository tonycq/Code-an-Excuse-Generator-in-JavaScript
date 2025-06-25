import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here


let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let arrayWho = Math.floor(Math.random()*who.length)
let arrayAction= Math.floor(Math.random()*action.length)
let arrayWhat = Math.floor(Math.random()*what.length)
let arrayWhen = Math.floor(Math.random()*when.length)

let excusesRandom = who[arrayWho] +' ' + action[arrayAction]+ ' '+ what[arrayWhat] + ' '+when[arrayWhen]
document.getElementById("excuse").innerHTML =  excusesRandom;


};

/*Cree cuatro arreglos con partes de la excusa (who, action, what, when).

Genere índices aleatorios para seleccionar un elemento de cada arreglo.

Concatene esos elementos en una sola frase (excusesRandom).

Intente mostrar esa frase en el HTML dentro del elemento <p id="excuse">. */

/*Errores Cometidos :
Guarde solo el texto del HTML y no el elemento:

const excuses = document.getElementById("excuse").innerHTML;
"""Esto solo guarda el texto. No te permite modificar el contenido del elemento después."""
 */
/*Intente modificar ese texto copiado:

excuses += excusesRandom;
Esto no cambio nada en el DOM, solo una variable interna.

tuve Confusión con el uso de excuses y excusesRandom:
Dudaba de cuál variable pasar al innerHTML.
me confundi porque no veías cambios visuales ni tampoco 
console.log en Codespace, lo que me hizo pensar que nada funcionaba.
Eso dificultó mucho el debug.
COMO LO RESOLVI :
Elimine la variable excuses mal usada y usase directamente:
document.getElementById("excuse").innerHTML = excusesRandom;
Me enfoce en imprimir en pantalla en lugar de consola, ya que el entorno de Codespace tenía bloqueada el uso de la consola.
Me diste cuenta de que el elemento se actualiza correctamente solo si accedes al elemento real del DOM, no a su texto.
 */