import Board from "../board";
import { Symbol } from "../enums/symbols";

export default interface WinningStrategy {
    getWinner(board: Board): Symbol | null;
}