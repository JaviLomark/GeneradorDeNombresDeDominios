/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(
    "#generadorDeDomnios"
  ).innerHTML = generadorDeDomnios();
};

function generadorDeDomnios() {
  let pronoun = ["Tu", "El"];
  let noun = ["Programador", "DesarrolladorWeb"];
  let adj = ["DeConfianza", "Efectivo"];
  let extension = [".com", ".net", ".pro", ".es"];

  let dominios = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < noun.length; a++) {
      for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < extension.length; c++) {
          dominios.push(pronoun[i] + noun[a] + adj[b] + extension[c]);
        }
      }
    }
  }
  return dominios.join("<br>" + "<br>");
}
