const p1 = {
  score: 0,
  button: document.querySelector('#p1Btn'),
  display: document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Btn'),
  display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
const currTime = document.querySelector('#datetime');

let winningScore = 3;
let isGameOver = false;

//add current time
let time = new Date();
currTime.innerHTML = ((("0" + (time.getMonth() + 1)).slice(-2)) + "/" + ("0" + time.getDate()).slice(-2)) + "/" + (time.getFullYear()) + " " + (("0" + time.getHours()).slice(-2)) + ":" + (("0" + time.getMinutes()).slice(-2));

//function to update p1/p2 scores when clicked
function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      //change color when p1 win
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      //disable button when gameover
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

//p1Btn function
p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
})

//p2Btn function
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
})

//reset game button 
resetBtn.addEventListener('click', reset);

//Change score select
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
})

//reset game back to 0 - 0
function reset() {
  //reset scoreboard
  isGameOver = false;

  //Simplified version of below
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }

  // p1.score = 0;
  // p2.score = 0;
  // p1.display.textContent = p1.score;
  // p2.display.textContent = p2.score;
  // //remove color when reset
  // p1.display.classList.remove('has-text-success', 'has-text-danger');
  // p2.display.classList.remove('has-text-success', 'has-text-danger');
  // //enable p1 and p2 button
  // p1.button.disabled = false;
  // p2.button.disabled = false;
}

