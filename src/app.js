/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function selecAleatoria(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = function() {
  //write your code here
  let who = ["My baby", "The dog", "The cat"];
  let action = ["ate", "broke", "peed", "hid"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  document.getElementById("excuse").innerHTML =
    selecAleatoria(who) +
    " " +
    selecAleatoria(action) +
    " " +
    selecAleatoria(what) +
    " " +
    selecAleatoria(when);
};
