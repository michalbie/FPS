export default class ServerManager {
	constructor() {
		this.levelData = null;
	}

	async downloadLevel() {
		const response = await fetch("/getLevel", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		if (!response.ok) {
			console.log("Error: " + response.status);
		} else {
			let resp = await response.json();
			console.log(resp);
			this.levelData = resp;
			return this.levelData;
		}
	}
}
