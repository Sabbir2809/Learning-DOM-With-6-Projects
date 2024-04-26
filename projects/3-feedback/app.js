// Getting elements from the dom
const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");

let selectedRating = "Satisfied";

// Attach Events
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove("active");
    }
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <p class="heart">❤️</p>
  <strong>Than You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  `;
});
