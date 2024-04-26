// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Day Way");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", () => {
  console.log("Great Way");
});

// ----------- Event (e) Object -----------
// It's an event object which contains information about particular event
const para = document.querySelector(".para");
para.addEventListener("click", (e) => {
  console.log(e);
});
