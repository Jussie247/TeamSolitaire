"use strict";
var Connect4;
(function (Connect4) {
    let rows;
    let cols;
    let currentPlayer = "player1";
    let board;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        const startButton = document.getElementById("start-game");
        startButton.addEventListener("click", startGame);
    }
    function startGame() {
        const boardSizeSelect = document.getElementById("board-size");
        const boardSize = boardSizeSelect.value;
        [rows, cols] = boardSize.split("x").map(Number);
        board = document.getElementById("game-board");
        board.innerHTML = ""; // Clear previous board
        createBoard();
        board.addEventListener("click", handleClick);
    }
    function createBoard() {
        board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let cell = document.createElement('div');
                cell.classList.add("cell");
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                board.appendChild(cell);
            }
        }
    }
    function handleClick(event) {
        const target = event.target;
        if (!target.classList.contains("cell"))
            return;
        const col = parseInt(target.dataset.col);
        placeCoin(col);
    }
    function placeCoin(col) {
        const cells = document.querySelectorAll(`.cell[data-col='${col}']`);
        for (let i = cells.length - 1; i >= 0; i--) {
            const cell = cells[i];
            if (!cell.classList.contains("player1") && !cell.classList.contains("player2")) {
                cell.classList.add(currentPlayer);
            }
        }
    }
})(Connect4 || (Connect4 = {}));
