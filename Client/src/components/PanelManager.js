import { Vector3 } from "three";

export default class PanelManager {
	constructor(camera, player, tileSize) {
		this.addListeners();
		this.camera = camera;
		this.player = player;
		this.tileSize = tileSize;
		this.needToCorrectTarget = false;
		this.cameraHeight = this.camera.threeCamera.position.y;
		this.cameraXAngle = this.camera.threeCamera.rotation.x;
		this.cameraDistanceFromPlayer = this.camera.threeCamera.position.z;
		this.cameraYAngle = this.camera.threeCamera.rotation.y;
		this.cameraFov = this.camera.threeCamera.fov;
		this.lightsIntensity = 0.8;
		this.shadowsEnabled = true;
		this.viewFromAbove = false;
	}

	addListeners() {
		document.getElementById("camera-height").addEventListener("input", () => {
			if (!this.viewFromAbove) {
				this.cameraHeight = document.getElementById("camera-height").value;
				this.camera.threeCamera.position.y = this.cameraHeight;
				this.camera.threeCamera.lookAt(this.player.mesh.position);
			}
		});
		document.getElementById("camera-x-angle").addEventListener("input", () => {
			if (!this.viewFromAbove) {
				this.cameraXAngle = document.getElementById("camera-x-angle").value;
				this.camera.threeCamera.rotation.x = this.cameraXAngle;
			}
		});
		document.getElementById("camera-distance-from-player").addEventListener("input", () => {
			if (!this.viewFromAbove) {
				this.cameraDistanceFromPlayer = document.getElementById("camera-distance-from-player").value;
				this.camera.threeCamera.position.z = this.cameraDistanceFromPlayer;
			}
		});
		document.getElementById("camera-y-angle").addEventListener("input", () => {
			if (!this.viewFromAbove) {
				this.cameraYAngle = document.getElementById("camera-y-angle").value;
				this.camera.threeCamera.rotation.y = this.cameraYAngle;
			}
		});
		document.getElementById("camera-fov").addEventListener("input", () => {
			this.cameraFov = document.getElementById("camera-fov").value;
			this.camera.threeCamera.fov = this.cameraFov;
			this.camera.threeCamera.updateProjectionMatrix();
		});
		document.getElementById("lights-intensity").addEventListener("input", () => {
			this.lightsIntensity = document.getElementById("lights-intensity").value;
		});
		document.getElementById("shadows").addEventListener("input", () => {
			this.shadowsEnabled = document.getElementById("shadows").checked;
		});
		document.getElementById("view-from-above").addEventListener("input", () => {
			if ((this.viewFromAbove = document.getElementById("view-from-above").checked)) {
				this.cameraHeight = 700;
				this.viewFromAbove = true;
				this.camera.threeCamera.position.set(250, 700, 251);
				this.camera.threeCamera.lookAt(new Vector3(250, 0, 250));
			} else {
				this.viewFromAbove = false;
				this.cameraHeight = this.player.mesh.position.y;
				this.camera.threeCamera.position.x = this.player.mesh.position.x;
				this.camera.threeCamera.position.y = this.player.mesh.position.y;
				this.camera.threeCamera.position.z = this.player.mesh.position.z - 2 * this.tileSize;
				this.camera.threeCamera.lookAt(this.player.mesh.position);

				console.log(this.camera.threeCamera.position.x);
				console.log(this.camera.threeCamera.position.y);
				console.log(this.camera.threeCamera.position.z);
			}
		});
		// document.getElementById("camera-height").addEventListener("input", () => {
		// 	this.cameraHeight = document.getElementById("camera-height").value;
		// });
	}
}
