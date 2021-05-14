import { PlaneGeometry, MeshPhongMaterial, Mesh, TextureLoader, DoubleSide } from "three";

export default class Wall {
	constructor(scene, tileSize) {
		this.textureLoader = new TextureLoader();
		this.scene = scene;
		this.geometry = new PlaneGeometry(tileSize, tileSize);
		this.texture = this.textureLoader.load("floor.jpg");
		this.material = new MeshPhongMaterial({
			shininess: 10,
			specular: 0x545454,
			side: DoubleSide,
			map: this.texture,
		});
		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.rotation.x = 1.57;
		this.mesh.position.x = 250;
		this.mesh.position.z = 250;
		this.mesh.receiveShadow = true;
		this.scene.add(this.mesh);
	}
}
