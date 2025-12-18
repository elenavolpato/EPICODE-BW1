let trueAnswers = localStorage.getItem("correctAnswers");
let falseAnswers = localStorage.getItem("wrongAnswers");
let totalAnswers = parseInt(trueAnswers) + parseInt(falseAnswers);

console.log(totalAnswers);
let percentualiL = (trueAnswers / totalAnswers) * 100;
let percentualiR = (falseAnswers / totalAnswers) * 100;

const canvas = document.querySelector("#grafico");
const numLeft = document.querySelector("#percentageNumberLeft");
const numRight = document.querySelector("#percentageNumberRight");
const spanL = document.querySelector("#spanL");
const spanR = document.querySelector("#spanR");
numLeft.innerText = percentualiL + "%";
numRight.innerText = percentualiR + "%";
spanL.innerText = trueAnswers + " / " + totalAnswers + " questions";
spanR.innerText = falseAnswers + " / " + totalAnswers + " questions";

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
