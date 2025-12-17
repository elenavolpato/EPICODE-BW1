const numberCountDown = document.querySelector("#numero");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const numerator = document.querySelector("#numerator");
let counter = 0;
let n = 0;
let answerTrue = [];
let answerFalse = [];

const timer = setInterval(() => {
  if (parseInt(numberCountDown.innerText) > 0) {
    numberCountDown.innerText -= 1;
  } else {
    counter++;
    numerator.innerText = counter;
    numberCountDown.innerText = 30;
    numerator;
    if (counter >= 5) window.location.href = "result.html";
    Question();
  }
}, 1000);

// oggetti per le domande

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

const Question = () => {
  question.innerText = Questions[counter].question;
  answer1.innerText = Questions[counter].answer[0];
  answer2.innerText = Questions[counter].answer[1];
  answer3.innerText = Questions[counter].answer[2];
  answer4.innerText = Questions[counter].answer[3];
};

answers.onclick = (e) => {
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
  counter++;
  numerator.innerText = counter;
  numberCountDown.innerText = 30;
  if (counter < 5) Question();
  else window.location.href = "result.html";
};
Question();
