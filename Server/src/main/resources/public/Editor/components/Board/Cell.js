import { updateOutput } from "../OutputArea/outputGenerator.js";

export default class Cell {
	constructor(cellDiv, x, z) {
		this.div = cellDiv;
		this.x = x;
		this.z = z;
		this.createOnClick();
	}

	createOnClick() {
		this.div.addEventListener("click", () => {
			this.modifyCell(window.selectedOption)
		});
	}

	modifyCell(type) {
		let element = null;
		switch (type) {
			case "wall":
				element = window.getComputedStyle(document.getElementById("wall-element"));
				this.div.style.backgroundColor = element.backgroundColor;
				updateOutput("wall", this.x, this.z);
				break;
			case "enemy":
				element = window.getComputedStyle(document.getElementById("enemy-element"));
				this.div.style.backgroundColor = element.backgroundColor;
				updateOutput("enemy", this.x, this.z);
				break;
			case "treasure":
				element = window.getComputedStyle(document.getElementById("treasure-element"));
				this.div.style.backgroundColor = element.backgroundColor;
				updateOutput("treasure", this.x, this.z);
				break;
			case "light":
				element = window.getComputedStyle(document.getElementById("light-element"));
				this.div.style.backgroundColor = element.backgroundColor;
				updateOutput("light", this.x, this.z);
				break;
			case "delete":
				this.div.style.backgroundColor = "white";
				updateOutput("delete", this.x, this.z);
				break;
			default:
				alert("Choose level element!");
				break;
		}
	}
}
