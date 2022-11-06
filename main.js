/*オープニング*/
const text = [
  "H",
  "E",
  "L",
  "L",
  "O",
  "!",
  " ",
  "I",
  "'",
  "m",
  " ",
  "T",
  "A",
  "K",
  "A",
  "H",
  "A",
  "S",
  "H",
  "I",
  " ",
  "Y",
  "U",
  "I",
  "!",
];
const title = document.getElementById("title");
let j = 0;
const opening = function () {
  if (j < text.length) {
    title.textContent += text[j];
    j += 1;
  }
};
setTimeout(function () {
  setInterval(opening, 100);
}, 1000);

/*hobby*/
const li1 = document.getElementById("li1");
let one = 0;
li1.onclick = function () {
  if (one % 2 === 0) {
    li1.innerHTML = "絵を見ること、<br>美術館の建物を<br>見ることが好きです🖼️";
  } else {
    li1.innerHTML = "美術館☜";
  }
  one += 1;
};
const li5 = document.getElementById("li5");
let five = 0;
li5.onclick = function () {
  if (five % 2 === 0) {
    li5.innerHTML = "京都のカフェに<br>たくさん行きたいです🤤";
  } else {
    li5.innerHTML = "カフェ☜";
  }
  five += 1;
};
const li9 = document.getElementById("li9");
let nine = 0;
li9.onclick = function () {
  if (nine % 2 === 0) {
    li9.innerHTML =
      "小説をよく読みます<br>図書館に行ったり<br>本屋さんに行ったり<br>するのが好きです📚";
  } else {
    li9.innerHTML = "読書☜";
  }
  nine += 1;
};

/*slideshow*/
const pics_src = ["images/yume1.png","images/yume2.png","images/yume3.png","images/yume4.png"]
let num = -1;
function slideshow_timer(){
  if (num === 3){
    num = 0;
  }
  else{
    num ++;
  }
  document.getElementById("yumetabi").src = pics_src[num];
}
setInterval(slideshow_timer,4000);

