let trueAnswers = localStorage.getItem("answersTrue");
let falseAnswers = localStorage.getItem("answersFalse");
let percentualiL = (trueAnswers / 5) * 100;
let percentualiR = (falseAnswers / 5) * 100;
const canvas = document.querySelector("#grafico");
const numLeft = document.querySelector("#percentageNumberLeft");
const numRight = document.querySelector("#percentageNumberRight");
const spanL = document.querySelector("#spanL");
const spanR = document.querySelector("#spanR");
numLeft.innerText = percentualiL + "%";
numRight.innerText = percentualiR + "%";
spanL.innerText = trueAnswers;
spanR.innerText = falseAnswers;

new Chart(canvas, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [falseAnswers, trueAnswers],
        backgroundColor: ["#C2128D", "#00FFFF"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: "72%",
  },
});
