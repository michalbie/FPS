import Board from "./components/Board/Board.js";
import { addOnclicksToOptions } from "./components/Options/Options.js";

window.selectedOption = null;
addOnclicksToOptions();
const board = new Board();
