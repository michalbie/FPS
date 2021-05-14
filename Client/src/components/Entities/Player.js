import { ConeGeometry, MeshBasicMaterial, Mesh, TextureLoader, FrontSide } from "three";

export default class Player {
	constructor(scene, tileSize) {
		this.textureLoader = new TextureLoader();
		this.scene = scene;
		this.geometry = new ConeGeometry(tileSize / 2, tileSize * 1.5, 15);
		this.material = new MeshBasicMaterial({
			color: 0xff00ff,
			transparent: true,
			wireframe: true,
			opacity: 0.5,
		});
		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.position.y = (tileSize * 1.5) / 2;
		this.mesh.position.x = tileSize * 4 - tileSize / 2;
		this.mesh.position.z = tileSize * 5 - tileSize / 2;
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
	}
}
