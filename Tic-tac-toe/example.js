"use strict";

let restart = document.querySelector(".game--restart");
let cells = document.querySelectorAll(".cell");
let playerCurrent = "x";
let activeGame = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameStatus = document.querySelector(".game--status");

const drawMessage = "Game ended in a draw!";
const winningMessage = () => `Player ${playerCurrent} has won!`;

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//кнопка сброса для всех ячеек
restart.addEventListener("click", function () {
  for (let i = 0; i < cells.length; ++i) {
    cells[i].textContent = "";
  }

  gameState = ["", "", "", "", "", "", "", "", ""];
  playerCurrent = "x";
  activeGame = true;
});

//запуск handleCellClick по клику
for (let j = 0; j < cells.length; j++) {
  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
}

function handlePlayerChange() {
  playerCurrent = playerCurrent === "x" ? "o" : "x"; //чередуем ход х и о
  gameStatus.innerHTML = `It's ${playerCurrent}'s turn`;
}

function handleCellClick(event) {
  if (!activeGame || gameState[event.target.dataset.cellIndex] !== "") {
    return;
  }

  gameState[event.target.dataset.cellIndex] = playerCurrent;
  cells[event.target.dataset.cellIndex].textContent = playerCurrent;

  handleResultValidation();
}

function handleResultValidation() {
  let roundWon = false;

  for (let i = 0; i < winningLines.length - 1; i++) {
    const winCondition = winningLines[i];
    const a = gameState[winCondition[0]];
    const b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      alert(winningMessage());
      activeGame = false;
      break;
    }
  }

  if (gameState.includes("") != true && activeGame === true) {
    alert("Увы, ничья:( Начните игру заново!");
  }

  handlePlayerChange();
}
