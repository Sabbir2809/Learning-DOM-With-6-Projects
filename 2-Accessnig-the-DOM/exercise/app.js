// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName("h4");

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
const green = document.getElementsByClassName("green");

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementId
const blue = document.getElementById("blue");

// 4. Select div which has the class & Id of "yellow" by using querySelector()
const yellow = document.querySelector(".yellow");

// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const container = document.querySelectorAll(".teal");
console.log(container);
