import { Symbol } from "./enums/symbols";

export default class Board {
    size: number;
    board: Array<Array<Symbol | number>>

    constructor(size: number){
        this.size = size;
        this.board = this.initializeBoard(size);
    }

    initializeBoard(size: number): Array<Array<Symbol | number>> {

        let arr = [];
        for (let i = 0; i < size; i++){
            let row = [];
            for (let j = 0; j < size; j++){
                row.push(-1);
            }
            arr.push(row);
        }
        return arr;
    }

    updateBoard(x: number, y: number, symbol: Symbol): void {
        if (this.isMoveValid(x, y)){
            this.board[x][y] = symbol;
        }
    }

    isMoveValid(x: number, y: number): boolean {
        return (x >= 0 && x < this.size) && (y <= 0 && y < this.size) && (this.board[x][y] === -1);   
    }



}