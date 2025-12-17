const numberCountDown = document.querySelector("#numero");
const questionElement = document.querySelector("#question");
const answers = document.querySelector("#answers");
const numerator = document.getElementById("numerator");
const typeOfQuestionText = document.getElementById("typeOfQuestionText");
const typeOfQuestionBtn = document.getElementById("typeOfQuestionBtn");

let questionsCounter = 0;

/* const timer = setInterval(() => {
  if (parseInt(numberCountDown.innerText) > 0) {
    numberCountDown.innerText -= 1;
  } else {
    questionsCounter++;
    numerator.innerText = questionsCounter;
    numberCountDown.innerText = 30;
    numerator;
    if (questionsCounter >= questions.length) window.location.href = "results.html";
    renderQuestion();
  }
}, 1000); */

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const currentQuestion = questions[questionsCounter];

// separate next button function
const goToNextQuestion = function () {
  questionsCounter++;
  if (questionsCounter >= questions.length) {
    window.location.href = "results.html";
    return;
  }
  numerator.innerText = questionsCounter;
  renderQuestion();
};

// put all answers in an array with random position
const shuffleArray = function (arr) {
  const shuffled = [...arr]; // create a new array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const attachAnswerListeners = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const answerElement = document.getElementById(`answer${i + 1}`);
    if (answerElement) {
      answerElement.onclick = handleClickAnswer;
    }
  }
};

const handleClickAnswer = function (e) {
  const clickedText = e.target.innerText;
  let correctAnswers = 0;
  let wrongAnswers = 0;

  if (questionsCounter < questions.length) {
    if (currentQuestion.type === "multiple") {
      if (clickedText === questions.correct_answer) {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    }
    if (currentQuestion.type === "boolean") {
      console.log(e);
      if (clickedText === "True") {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
      goToNextQuestion();
    }
  }
  localStorage.setItem("correctAnswers", correctAnswers);
  localStorage.setItem("wrongAnswers", wrongAnswers);
};
const renderQuestion = () => {
  let allAnswers = []; // empties array
  questionElement.innerText = currentQuestion.question; // renders the question title
  allAnswers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer); // arranges all answers in an array
  let shuffledAnswers = shuffleArray(allAnswers); // shuffled answers - used only for multiple

  for (let i = 0; i < allAnswers.length; i++) {
    let eachAnswer = document.querySelector(`#answer${i + 1}`);

    if (currentQuestion.type === "multiple") {
      typeOfQuestionText.innerText = "Multiple selection";
      eachAnswer.innerText = shuffledAnswers[i];
      document.getElementById("answer2").style.display = "";
      document.getElementById("answer3").style.display = "";
    }
    if (currentQuestion.type === "boolean") {
      eachAnswer.innerText = allAnswers[i];
      typeOfQuestionText.innerText = "Single Selection";
      typeOfQuestionBtn.style.display = "none";

      // workaround to clear last two elements of array if it is a boolean after a multiple
      if (document.getElementById("answer2") || document.getElementById("answer3")) {
        document.getElementById("answer2").style.display = "none";
        document.getElementById("answer3").style.display = "none";
      }
    }
  }
  attachAnswerListeners(allAnswers);
};

typeOfQuestionBtn.onclick = goToNextQuestion;
renderQuestion();
