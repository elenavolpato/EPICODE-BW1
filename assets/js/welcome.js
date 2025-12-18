const checkbox = document.getElementById("nohelp");
const nextBtn = document.querySelector(".next-btn");

console.log(nextBtn);

const activateBtn = function () {
  if (checkbox.checked === false) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
};
activateBtn();

checkbox.addEventListener("click", activateBtn);
