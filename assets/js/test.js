const numberCountDown = document.querySelector("#numero");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const risposteSingole = document.querySelectorAll(".answer");
const numerator = document.querySelector("#numerator");
let counter = 0;
let n = 0;
let answerTrue = [];
let answerFalse = [];
let arrayAnswer = [answer1, answer2, answer3, answer4];
const Questions = [
  {
    question: "come si chiama paola?",
    answer: ["pimpi", "pompi", "pumpi", "pimpo"],
    correctAnswer: 0,
  },
  {
    question: "come si chiama fra?",
    answer: ["an", "anakin", "pufd", "fdmpo"],
    correctAnswer: 1,
  },
  {
    question: "come si chiama gio?",
    answer: ["gio", "anakin", "giovanni", "fdmpo"],
    correctAnswer: 2,
  },
  {
    question: "come si chiama mamma?",
    answer: ["an", "anakin", "pufd", "fcate"],
    correctAnswer: 3,
  },
  {
    question: "come si chiama papa?",
    answer: ["an", "umberto", "pufd", "fcate"],
    correctAnswer: 1,
  },
];

risposteSingole.forEach((risposta) => {
  risposta.onclick = (e) => {
    switch (counter) {
      case 0:
        if (e.target.id === "answer1") answerTrue.push("*");
        else answerFalse.push("*");
        break;
      case 1:
        if (e.target.id === "answer2") answerTrue.push("*");
        else answerFalse.push("*");
        break;
      case 2:
        if (e.target.id === "answer3") answerTrue.push("*");
        else answerFalse.push("*");
        break;
      case 3:
        if (e.target.id === "answer4") answerTrue.push("*");
        else answerFalse.push("*");
        break;
      case 4:
        if (e.target.id === "answer2") answerTrue.push("*");
        else answerFalse.push("*");
        break;
    }
    console.log(answerFalse);
    console.log(answerTrue);
    counter++;
    numerator.innerText = counter;
    numberCountDown.innerText = 5;
    if (counter < 5) Question();
    else window.location.href = "results.html";
  };
});
const timer = setInterval(() => {
  if (parseInt(numberCountDown.innerText) > 0) {
    numberCountDown.innerText -= 1;
  } else {
    counter++;
    answerFalse.push("*");
    numerator.innerText = counter;
    numberCountDown.innerText = 5;
    numerator;

    if (counter >= 5) window.location.href = "results.html";
    Question();
  }
}, 1000);

const Question = () => {
  question.innerText = Questions[counter].question;
  for (let i = 0; i < 4; i++) {
    arrayAnswer[i].innerText = Questions[counter].answer[i];
  }
};
Question();
