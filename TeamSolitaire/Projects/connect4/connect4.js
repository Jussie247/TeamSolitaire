"use strict";
var connect4;
(function (connect4) {
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
    }
})(connect4 || (connect4 = {}));
