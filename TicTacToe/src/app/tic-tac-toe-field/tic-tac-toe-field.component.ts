import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe-field.component.html',
  styleUrl: './tic-tac-toe-field.component.css'
})
export class TicTacToeFieldComponent {
  winners: string[] = [];
  board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer: string = '❌';
  gameOver: boolean = false;

  makeMove(row: number, col: number) {
    if (this.gameOver) {
      return;
    }

    if(this.board[row][col] === "") {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === '❌' ? '⭕' : '❌';
    }
  }

  resetGame(): void {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    this.currentPlayer = '❌';
    this.gameOver = false;
  }

  checkWinner(): void {
    const lines = [
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],

      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],

      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    for (let line of lines) {
      if (line[0] && line[0] === line[1] && line[1] === line[2]) {
        this.winners.push(line[0]);
        this.gameOver = true;
        return;
      }
    }

    let allFieldsFilled = true;
    for (let row of this.board) {
      for (let cell of row) {
        if (!cell) {
          allFieldsFilled = false;
        }
      }
    }

    if (allFieldsFilled) {
      this.gameOver = true;
      this.winners.push('Draw');
    }
  }
}
