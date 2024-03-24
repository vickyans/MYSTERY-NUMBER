//variables
let numberToGuess = document.querySelector("#question-mark");
let CommentLeader = document.querySelector(".comment");
let score = document.querySelector(".score");
let Score = 20;
let highScore = document.querySelector(".highscore");
let inputTry = document.querySelector("#input");
const checkButton = document.querySelector(".checkbutton");
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const againBtn = checkButton.addEventListener("click", function () {
  if (!inputTry.value) {
    alert("please insert a try");
  }else{
  if (parseInt(inputTry.value) == randomNumber) {
    CommentLeader.innerText = " Congratulations🎉";
    document.body.style.backgroundColor = "white";
    score.innerText = Score;
    numberToGuess.innerText = randomNumber;
    if (Score >= parseInt(highScore.value)) {
      highScore.innerText = Score;
    } else {
      highScore.innerText = Score;
    }
  } else if (parseInt(inputTry.value) > randomNumber) {
    Score--;
    score.innerText = Score;
    CommentLeader.innerText = "Too High 😏";
  } else if (parseInt(inputTry.value) < randomNumber) {
    CommentLeader.innerText = "Too Low🙄";
    Score--;
    score.innerText = Score;
  }
}});
