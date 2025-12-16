let timeLeft = 60;
let timerElement = document.getElementById("time");
let answers = document.querySelectorAll(".answer");

const timer = setInterval(function () {
  timeLeft--;
  timerElement.innerText = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    disableAnswers();
  }
}, 1000);

answers.forEach(function (button) {
  button.addEventListener("click", function () {
    clearInterval(timer);

    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
      answers.forEach(function (btn) {
        if (btn.dataset.correct === "true") {
          btn.classList.add("correct");
        }
      });
    }

    disableAnswers();
  });
});
function disableAnswers() {
  answers.forEach(function (button) {
    button.disabled = true;
  });
}
