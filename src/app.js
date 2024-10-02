/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".uy", ".es"];
  pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
      noun.forEach(nombre => {
        dominio.forEach(dom => {
          console.log(pronombre + adjetivo + nombre + ".com" + dom);
        });
      });
    });
  });
};
