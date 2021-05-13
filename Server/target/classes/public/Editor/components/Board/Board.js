import Cell from "./Cell.js";

export default class Board {
	constructor() {
		this.cells = [];
		this.createBoardGrid();
		this.addListeners();
	}

	createBoardGrid() {
		const board = document.getElementById("board-container");

		for (let i = 0; i < 10; i++) {
			this.cells.push([]);

			for (let j = 0; j < 10; j++) {
				const cell = this.createCell(i, j);
				board.appendChild(cell.div);
				this.cells[i].push(cell);
			}
		}
	}

	addListeners() {
		document.getElementById("board-container").addEventListener("levelDataUpdated", () => {
			this.updateBoard();
		});
	}

	createCell(x, y) {
		const cell = document.createElement("div");
		cell.setAttribute("class", "cell");
		const object = new Cell(cell, x, y);
		return object;
	}

	updateBoard() {
		let data = JSON.parse(document.getElementById("output-area").innerHTML);
		this.clearBoard();
		data.forEach((element) => {
			this.cells[element.x][element.y].modifyCell(element.type);
		});
	}

	clearBoard() {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				this.cells[i][j].modifyCell("delete");
			}
		}
	}
}
