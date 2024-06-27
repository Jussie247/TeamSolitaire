namespace connect4 {
    let rows: number;
    let cols: number;
    let currentPlayer: string = "player1";
    let board: HTMLElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        const startButton = document.getElementById("start-game")!;
        startButton.addEventListener("click", startGame)

    }
    function startGame(): void {
        const boardSizeSelect = document.getElementById("board-size") as HTMLSelectElement;
        
    }
}