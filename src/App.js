import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      player_turn: "X",
    };
  }

  squareClicked(index) {
    let player_turn = this.state.player_turn;
    let board = this.state.board;
    board[index] = player_turn;
    let winning_combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winning_combinations.length; i++) {
      let winning_row = winning_combinations[i];
      let p1 = winning_row[0];
      let p2 = winning_row[1];
      let p3 = winning_row[2];
      if (
        board[p1] != "" &&
        board[p1] == board[p2] &&
        board[p2] == board[p3] &&
        board[p3] == board[p1]
      )
        toast.success(`winner ${player_turn} `, {
          position: toast.POSITION.TOP_CENTER,
        });
    }

    player_turn = player_turn == "X" ? "O" : "X";

    this.setState({
      player_turn: player_turn,
      board: board,
    });

    console.log(index);
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.state.board.map((square, index) => {
            return (
              <div onClick={() => this.squareClicked(index)} className="square">
                <h3 className="symbol">{square}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
