import { getOutput } from "../OutputArea/outputGenerator.js";

const addOnclickToOption = (option_id, set_value) => {
	document.getElementById(option_id).addEventListener("click", () => {
		window.selectedOption = set_value;
	});
};

const setSaveToServerOnclick = () => {
	document.getElementById("save-level-on-server").addEventListener("click", () => {
		const output = getOutput();
		sendOutputToServer(output);
	});
};

const setLoadFromServerOnclick = () => {
	document.getElementById("load-level-from-server").addEventListener("click", () => {
		getLevelFromServer();
	});
};

const sendOutputToServer = async (output) => {
	const response = await fetch("http://localhost:5000/saveLevel", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(output),
	});

	if (!response.ok) {
		console.log("Error: " + response.status);
	} else {
		console.log("Succes");
	}
};

const getLevelFromServer = async () => {
	const response = await fetch("http://localhost:5000/getLevel", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
	});

	if (!response.ok) {
		console.log("Error: " + response.status);
	} else {
		let resp = await response.json();
		console.log(resp);
		updateOutput(resp);
	}
};

const updateOutput = (levelData) => {
	const outputArea = document.getElementById("output-area");

	let output = [];
	levelData.forEach((element) => {
		output.push(element);
	});
	outputArea.innerHTML = JSON.stringify(output, null, 5);

	document.getElementById("board-container").dispatchEvent(new Event("levelDataUpdated"));
};

export const addOnclicksToOptions = () => {
	setSaveToServerOnclick();
	setLoadFromServerOnclick();
	addOnclickToOption("wall-element", "wall");
	addOnclickToOption("enemy-element", "enemy");
	addOnclickToOption("treasure-element", "treasure");
	addOnclickToOption("light-element", "light");
	addOnclickToOption("delete-element", "delete");
};
