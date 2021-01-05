// Тоглогчийн ээлж хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1.
var activePlayer;
// Тоглоомын төлвийг хадгалах хувьсагч
var isNewGame;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Тоглоом эхлэхэд бэлтгэх
var diceDom = document.querySelector(".dice");

initNewGame();

function initNewGame() {
  isNewGame = true;
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  diceDom.style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

function switchPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  //diceDom.style.display = "none";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchPlayer();
    }
  }
});
// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    score[activePlayer] = score[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", initNewGame);
