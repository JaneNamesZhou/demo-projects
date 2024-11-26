class Player {
    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }
}

class Board {
    constructor() {
        this.reset();
    }

    generateHTMLBoard() {
        document.getElementById('game-board').innerHTML = '';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => this.makeMove(i, j));
                document.getElementById('game-board').appendChild(cell);
            }
        }
    }

    makeMove(row, col) {
        if (this.board[row][col] === null) {
            this.board[row][col] = this.currentPlayer.symbol;

            const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.textContent = this.currentPlayer.symbol;
            cell.style.color = this.currentPlayer.color;

            if (this.checkWin()) {
                alert(`${this.currentPlayer.symbol} Win!`);
                this.reset();
            } else if (this.isFull()) {
                alert("平局！");
                this.reset();
            } else {
                this.switchPlayer();
            }
        }
    }

    switchPlayer() {
        [this.currentPlayer, this.otherPlayer] = [this.otherPlayer, this.currentPlayer];
    }

    isFull() {
        return this.board.every(row => row.every(cell => cell !== null));
    }

    checkWin() {
        const winCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1],[1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ]
        return winCombinations.some(combination => {
            const [a, b, c] = combination;
            return (
                this.board[a[0]][a[1]] !== null &&
                this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
                this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
            )
        })
    }

    reset() {
        this.board = Array.from({ length: 3 }, () => Array(3).fill(null));
        this.currentPlayer = new Player('❌', 'red');
        this.otherPlayer = new Player('⭕️', 'black');
        this.generateHTMLBoard();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const board = new Board();
    document.getElementById('new-game').addEventListener('click', () => board.reset());
});