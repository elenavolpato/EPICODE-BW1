const checkbox = document.getElementById("nohelp");
const nextBtn = document.querySelector(".next-btn");

console.log(nextBtn);

const activateBtn = function () {
  if (checkbox.checked === false) {
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove("disabled");
  }
};
activateBtn();

checkbox.addEventListener("click", activateBtn);
