import Board from "../board";
import { Symbol } from "../enums/symbols";
import WinningStrategy from "../interface/WinningStrategy";

export default class SimpleWinnerStrategy implements WinningStrategy {

    getWinner(board: Board): Symbol | null {
        let winner: Symbol | null = null;
        return winner;
    }
}