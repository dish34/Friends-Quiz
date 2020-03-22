const questions = [
  {
    question: "Tell him to email me at www-dot-haha-not-so-much-dot-com!",
    choices: ["Ross", "Chandler", "Monica"],
    answer: "Chandler"
  }
  //   {
  //     question: "I wish I could, but I don’t want to.",
  //     choices: ["Monica", "Chandler", "Phoebe"],
  //     answer: "Phoebe"
  //   },
  //   {
  //     question: "Well, the fridge broke so I had to eat everything.",
  //     choices: ["Joey", "Chandler", "Phoebe"],
  //     answer: "Joey"
  //   },
  //   {
  //     question: "Welcome to the real world,it sucks, you’re gonna love it.",
  //     choices: ["Ross", "Chandler", "Monica"],
  //     answer: "Monica"
  //   },
  //   {
  //     question: "My sandwich, My sandwich !!",
  //     choices: ["Ross", "Chandler", "Monica"],
  //     answer: "Ross"
  //   }
];
let question_index = 0;
let correct = 0;
document.addEventListener("DOMContentLoaded", () => {
  load_question();
});

load_question = () => {
  if (question_index === questions.length) {
    final_screen();
  } else {
    document.getElementById("question").innerHTML =
      questions[question_index].question;
    let choices = document.getElementById("choices");
    choices.innerHTML = "";
    for (const choice of questions[question_index].choices) {
      choices.innerHTML += `<button class="mcq">${choice}</button>`;
    }
    const options = document.querySelectorAll(".mcq");
    options.forEach((option) => {
      option.onclick = () => {
        console.log("hello", option.textContent);
        if (option.textContent === questions[question_index].answer) {
          correct += 1;
        }
        document.querySelector(
          "#answer"
        ).innerHTML = ` ${correct} of ${question_index}`;
        question_index += 1;
        load_question();
      };
    });
    // for (const option of options) {
    //   option.onclick = () => {
    //     console.log("hello", option.textContent);
    //     if (option.textContent === questions[question_index].answer) {
    //       correct += 1;
    //     }
    //     document.querySelector(
    //       "#answer"
    //     ).innerHTML = ` ${correct} of ${question_index}`;
    //     question_index += 1;
    //     load_question();
    //   };
    // }
  }
  document.querySelector(
    "#answer"
  ).innerHTML = ` ${correct} of ${question_index}`;
};
final_screen = () => {
  let gameover = document.querySelector("#question");
  gameover.innerHTML = "";
  if (question_index === correct) {
    gameover.innerHTML = "You are Awesome 😎";
  } else {
    gameover.innerHTML = "Game Over Friend's Lover. 🥳";
  }
  document.querySelector("#choices").remove();
  document.querySelector(
    "#answer"
  ).innerHTML = ` ${correct} of ${question_index}`;
};
