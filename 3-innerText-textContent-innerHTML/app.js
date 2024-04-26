// innerText
// textContent
// innerHTML

const p = document.querySelector("p");

// Formatted & will not show script tag
console.log(p.innerText);
// Not Formatted and will show script tag
console.log(p.textContent);
// Will Show All the content + HTML
console.log(p.innerHTML);

// Changing the values
p.innerText = "Text Changed";
p.innerHTML = "<p>Change Value</p>";
