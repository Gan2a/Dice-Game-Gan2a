// Тоглогчийн ээлж хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

//<div class="player-score" id="score-0">43</div>
//window.document.querySelector("#score-0").textContent = dice;
// Тоглоом эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
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
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchPlayer();
  }
});
// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 10) {
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
});

document.querySelector(".btn-new").addEventListener("click", function () {});
