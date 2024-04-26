const a = document.querySelector("a");
const input = document.querySelector("input");

console.log(a);
console.log(a.href);
console.log(input.value);
console.log(input.type);

a.href = "https://facebook.com/sabbir2809";
console.log((input.value = "Sabbir2809"));
console.log((input.type = "text"));
console.log((input.placeholder = "Provide a FB Username"));

// getAttribute(attrName)
console.log(input.getAttribute("type"));

// setAttribute(attrName, value)
console.log(input.setAttribute("placeholder", "Username"));
