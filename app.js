// Тоглогчийн ээлж хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
//window.document.querySelector("#score-0").textContent = dice;
// Тоглоом эхлэхэд бэлтгэх
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";
document.querySelector("btn-roll").addEventListener("click", shooShid);
shooShid;
console.log("Шоо: " + dice);
