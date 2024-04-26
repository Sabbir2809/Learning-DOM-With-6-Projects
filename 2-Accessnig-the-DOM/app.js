// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
// 2. getElementById
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector("h1"));
console.log(document.querySelector(".cls-1"));
console.log(document.querySelector("#id-1"));
console.log(document.querySelector("li"));
// 5. querySelectorAll
console.log(document.querySelectorAll("li"));

// ---------------------------------------
// Storing data in variables
const h1 = document.getElementsByTagName("h1");
const main = document.getElementById("main");
const cls = document.getElementsByClassName("cls");
const cls1 = document.querySelector(".cls-1");
const id1 = document.querySelector("#id-1");
const li = document.querySelectorAll("li");
