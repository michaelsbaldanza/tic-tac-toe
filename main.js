//core data

//1.0 Constants
//1.1
//1.2
const winCombos = [
    [board[0][0], board[0][1], board[0][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[2][0], board[2][1], board[2][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
];

//2.0 Variables for tracking game states
//2.1
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

//2.2
let turn;

//2.3
let win = ["Congratulations!", "Better luck next time!", `Player ${}'s turn`];

//3.0 Elements
//3.1
const squares = document.querySelectorAll("div.square");

//4.0 Initializing (Functions?)
//4.1
initialize;

function initialize() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    turn = 'X';
    // if (playerOneWins) {
    //     return playerOne;
    // } else if (playerTwoWins) {
    //     return playerTwo;
    // } else if (tieGame) {
    //     return T;
    // } else return null;
    renderBoard();
}

//4.2.1
function renderBoard() {
    for (i=0; i<board.length; i++) {
        board[i][0];
        if (turn =  1) {
        squares[i][0].style.backgroundColor = colors[playerOne];
        } else if (turn = -1) {
        squares[i][0].style.backgroundColor = colors[playerOne];
        };
    };
}

//4.2.2
function renderMessage() {
    if (winner !== null) {

    }
}

//5.0
