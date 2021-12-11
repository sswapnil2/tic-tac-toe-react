import Board from "./board";
import { Symbol } from "./enums/symbols";
import WinningStrategy from "./interface/WinningStrategy";
import Player from "./player/player";

export default class Game {
    player1: Player
    player2: Player
    currentPlayer: Player;
    isOver: boolean = false;
    board: Board
    timesPlayed: number;
    totalChances: number;
    winningStrategy: WinningStrategy

    constructor(player1: Player, player2: Player, boardSize: number, winningStrategy: WinningStrategy){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Board(boardSize);
        this.timesPlayed = 0;
        this.totalChances = boardSize * boardSize;
        this.currentPlayer = player1;
        this.winningStrategy = winningStrategy;
    }


    run(){
        while (this.timesPlayed < this.totalChances ){
            let [x, y]: [number, number] =  this.currentPlayer?.makeMove(this.board);

            if (this.board.isMoveValid(x, y)){
                this.board.updateBoard(x, y, this.currentPlayer.symbol);
            } else {
                // log invalid move and ask to retry
            }
            let winner = this.winningStrategy.getWinner(this.board);
            if (winner != null){
                this.declareWinner(winner);
                return;
            }
            
            this.changePlayer();
            this.timesPlayed++;
        }
    }

    changePlayer(){
        if (this.currentPlayer === this.player1){
            this.currentPlayer = this.player2;
        } else {
            this.currentPlayer = this.player1;
        }
    
    }

    declareWinner(symbol: Symbol): void {
        let player: Player =  this.getPlayerBySymbol(symbol);
        console.log(player);
    }

    getPlayerBySymbol(symbol: Symbol): Player{
        return this.player1.symbol === symbol ? this.player1 : this.player2;
    }

    getBoard(): Array<Array<Symbol | number>> {
        return this.board.board;
    }

}