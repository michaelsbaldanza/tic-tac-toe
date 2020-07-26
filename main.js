let gameStatus = document.querySelector('p');

let current_player = "X"; // can be "X" or "O"

let top_left_div = document.getElementById('top_left');
let top_middle_div = document.getElementById('top_middle');
let top_right_div = document.getElementById('top_right');
let middle_left_div = document.getElementById('middle_left');
let middle_middle_div = document.getElementById('middle_middle');
let middle_right_div = document.getElementById('middle_right');
let bottom_left_div = document.getElementById('bottom_left');
let bottom_middle_div = document.getElementById('bottom_middle');
let bottom_right_div = document.getElementById('bottom_right');
top_left_div.addEventListener('click',executeTurn);
top_middle_div.addEventListener('click',executeTurn);
top_right_div.addEventListener('click',executeTurn);
middle_left_div.addEventListener('click',executeTurn);
middle_middle_div.addEventListener('click',executeTurn);
middle_right_div.addEventListener('click',executeTurn);
bottom_left_div.addEventListener('click',executeTurn);
bottom_middle_div.addEventListener('click',executeTurn);
bottom_right_div.addEventListener('click',executeTurn);


function executeTurn(event) {
  if (event.target.id == 'top_left') top_left_div.innerHTML = current_player;
  if (event.target.id == 'top_middle') top_middle_div.innerHTML = current_player;
  if (event.target.id == 'top_right') top_right_div.innerHTML = current_player;
  if (event.target.id == 'middle_left') middle_left_div.innerHTML = current_player;
  if (event.target.id == 'middle_middle') middle_middle_div.innerHTML = current_player;
  if (event.target.id == 'middle_right') middle_right_div.innerHTML = current_player;
  if (event.target.id == 'bottom_left') bottom_left_div.innerHTML = current_player;
  if (event.target.id == 'bottom_middle') bottom_middle_div.innerHTML = current_player;
  if (event.target.id == 'bottom_right') bottom_right_div.innerHTML = current_player;

  console.log(event.target.id + " was clicked");
  console.log("now the current player is:" + current_player)
  
  checkWinningCondition();

  if (current_player == "X") {
    current_player = "O"
  } else {
    current_player = "X"
  };

unclickable();
};

function checkWinningCondition() {
    if (top_left_div === top_middle_div && top_middle_div === top_right_div
    ||  middle_left_div === middle_middle_div && middle_middle_div === middle_right_div
    ||  bottom_left_div === bottom_middle_div && bottom_middle_div === bottom_right_div
    ||  top_left_div === middle_left_div && middle_left_div === bottom_left_div
    ||  top_middle_div === middle_middle_div && middle_middle_div === bottom_middle_div
    ||  top_right_div === middle_right_div && middle_right_div === bottom_right_div
    ||  top_left_div === middle_middle_div && middle_middle_div === bottom_right_div
    ||  top_right_div === middle_middle_div && middle_middle_div === bottom_left_div) {
        gameStatus.innerHTML = `${player} VICTORY`;
    } else {
        gameStatus.innerHTML = `INCONCLUSIVE...`;
    };
};

function unclickable() {
    if (top_left_div === "X" || top_left_div === "O") {
        top_left_div.removeEventListener('click', executeTurn);
    };
    if (top_middle_div === "X" || top_middle_div === "O") {
        top_middle_div.removeEventListener('click', executeTurn);
    };
    if (top_right_div === "X" || top_right_div === "O") {
        top_right_div.removeEventListener('click', executeTurn);
    };
    if (middle_left_div === "X" || middle_left_div === "O") {
        middle_left_div.removeEventListener('click', executeTurn);
    };
    if (middle_middle_div === "X" || middle_middle_div === "O") {
        middle_middle_div.removeEventListener('click', executeTurn);
    };
    if (middle_right_div === "X" || middle_right_div === "O") {
        middle_right_div.removeEventListener('click', executeTurn);
    };
    if (bottom_left_div === "X" || bottom_left_div === "O") {
        bottom_left_div.removeEventListener('click', executeTurn);
    };
    if (bottom_middle_div === "X" || bottom_middle_div === "O") {
        bottom_middle_div.removeEventListener('click', executeTurn);
    };
    if (bottom_right_div === "X" || bottom_right_div === "O") {
        bottom_right_div.removeEventListener('click', executeTurn);
    };
};