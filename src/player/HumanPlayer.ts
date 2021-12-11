import Board from "../board";
import Player from "./player";

export default class HumanPlayer extends Player {

    makeMove(board: Board): [number, number] {
        return [0, 0];
    }
}