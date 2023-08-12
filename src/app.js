/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandom(array) {
  return array[ Math.floor( Math.random() * array.length ) ];
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
  let excuseSentence =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
  document.getElementById("excuse").innerHTML = excuseSentence;
};
