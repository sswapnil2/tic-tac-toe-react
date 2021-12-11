import Board from "../board";
import { Symbol } from "../enums/symbols";

export default abstract class Player {
    symbol: Symbol

    constructor(symbol: Symbol) {
        this.symbol = symbol;
    }

    abstract makeMove(board: Board): [number, number];
}