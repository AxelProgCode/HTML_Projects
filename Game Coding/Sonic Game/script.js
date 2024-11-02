const sonic = document.querySelector(".sonic"),
  sonicImg = document.querySelector(".sonic img"),
  block = document.querySelector(".block"),
  road = document.querySelector(".road"),
  cloud = document.querySelector(".cloud"),
  score = document.querySelector(".score"),
  gameOver = document.querySelector(".gameOver");

//function score
let interval = null;
let playerScore = 0;

let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
};

//jumping player
document.addEventListener("keydown", (e) => {
  if (e.code == "KeyW") {
    sonic.classList.add("jump");
    setTimeout(() => {
      sonic.classList.remove("jump");
    }, 500);
  }
});

//start game
document.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    gameOver.style.display = "none";
    block.style.animation = "block 1s infinite linear";
    road.style.animation = "road 6s linear infinite";
    cloud.style.animation = "cloud 30s linear infinite";
    sonic.style.removeProperty("animation");
    sonicImg.src = "media/sonic.gif";

    let playerScore = 0;
    interval = setInterval(scoreCounter, 20);
  }
});

//game over
const loop = setInterval(() => {
  const blockPosition = block.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (blockPosition <= 120 && blockPosition > 0 && sonicPosition < 25.7) {
    block.style.animation = "none";

    sonic.style.animation = "none";

    road.style.animation = "none";
    cloud.style.animation = "none";

    sonicImg.src = "media/sonic-gameover.gif";

    gameOver.style.display = "flex";
    clearInterval(interval);
    playerScore = 0;
  }
}, 10);
