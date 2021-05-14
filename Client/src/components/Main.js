import { Scene, AmbientLight, AxesHelper, PointLight, Vector3, PCFSoftShadowMap } from "three";
import Renderer from "./Renderer";
import Camera from "./Camera";
import ServerManager from "./ServerManager";
import PanelManager from "./PanelManager";
import Floor from "./Entities/Floor";
import Wall from "./Entities/Wall";
import Player from "./Entities/Player";

export default class Main {
	constructor(container) {
		this.serverManager = new ServerManager();
		this.tileSize = 50;
		this.entities = [];

		// właściwości klasy
		this.container = container;
		this.scene = new Scene();
		this.renderer = new Renderer(this.scene, container);
		this.player = new Player(this.scene, this.tileSize);
		this.scene.add(this.player.mesh);

		this.camera = new Camera(this.renderer.threeRenderer);
		this.camera.threeCamera.lookAt(this.player.mesh.position);

		this.camera.threeCamera.position.x = this.player.mesh.position.x;
		this.camera.threeCamera.position.y = this.player.mesh.position.y;
		this.camera.threeCamera.position.z = this.player.mesh.position.z - 2 * this.tileSize;
		this.panelManager = new PanelManager(this.camera, this.player, this.tileSize);
		this.floor = new Floor(this.scene, 500);

		this.ambientLight = new AmbientLight(0xffffff, 0.2);
		this.scene.add(this.ambientLight);

		this.axes = new AxesHelper(1000);
		this.scene.add(this.axes);

		this.initializeLevel();

		this.render();
	}

	render() {
		console.log("render leci");
		this.renderer.render(this.scene, this.camera.threeCamera);

		this.updateValuesFromPanel();
		requestAnimationFrame(this.render.bind(this));
	}

	async initializeLevel() {
		const data = await this.serverManager.downloadLevel();

		data.forEach((entity) => {
			switch (entity.type) {
				case "wall":
					const wall = new Wall(this.scene, this.tileSize);
					wall.mesh.position.x = entity.x * this.tileSize + this.tileSize / 2; //translating to flip the level
					wall.mesh.position.z = entity.z * this.tileSize + this.tileSize / 2;
					this.scene.add(wall.mesh);
					this.entities.push({ type: "wall", object: wall });
					break;
				case "light":
					var light = new PointLight(0xffffff, 0.8);
					light.position.x = entity.x * this.tileSize + this.tileSize / 2;
					light.position.z = entity.z * this.tileSize + this.tileSize / 2;
					light.position.y = 60;
					light.castShadow = true;
					this.scene.add(light);
					this.entities.push({ type: "light", object: light });
					break;
			}
		});
	}

	updateValuesFromPanel() {
		this.entities.forEach((entity) => {
			if (entity.type == "light") {
				entity.object.intensity = this.panelManager.lightsIntensity;
			}
		});

		if (this.panelManager.shadowsEnabled == true) {
			this.renderer.threeRenderer.shadowMap.enabled = true;
			this.renderer.threeRenderer.shadowMap.type = PCFSoftShadowMap;
			this.entities.forEach((entity) => {
				if (entity.type == "light") {
					entity.object.castShadow = true;
				}
			});
		} else {
			this.renderer.threeRenderer.shadowMap.enabled = false;
			this.entities.forEach((entity) => {
				if (entity.type == "light") {
					entity.object.castShadow = false;
				}
			});
		}

		// if (this.panelManager.viewFromAbove == true) {
		// 	// this.camera.threeCamera.rotation.x = 0;
		// 	// this.camera.threeCamera.rotation.y = 0;
		// 	this.camera.threeCamera.position.set(250, 700, 251);
		// 	this.camera.threeCamera.lookAt(new Vector3(250, 0, 250));

		// 	this.camera.threeCamera.position.y = this.panelManager.cameraHeight;
		// 	this.camera.threeCamera.fov = this.panelManager.cameraFov;
		// 	this.camera.threeCamera.updateProjectionMatrix();
		// } else {
		// 	this.camera.threeCamera.rotation.x = this.panelManager.cameraXAngle;
		// 	this.camera.threeCamera.position.z = this.panelManager.cameraDistanceFromPlayer;
		// 	this.camera.threeCamera.rotation.y = this.panelManager.cameraYAngle;
		// 	this.camera.threeCamera.position.y = this.panelManager.cameraHeight;
		// 	this.camera.threeCamera.fov = this.panelManager.cameraFov;
		// 	this.camera.threeCamera.updateProjectionMatrix();
		// }

		// if (this.camera.threeCamera.rotation.x == 0 && this.camera.threeCamera.rotation.y == 0) {
		// 	console.log("tak");
		// 	this.camera.threeCamera.lookAt(this.player.mesh.position);
		// 	this.panelManager.needToCorrectTarget = false;
		// }

		//this.camera.threeCamera.lookAt(new Vector3(250, 0, 250));
	}
}
