import { BoxGeometry, MeshPhongMaterial, Mesh, TextureLoader, DoubleSide, RepeatWrapping, FrontSide } from "three";

export default class Wall {
	constructor(scene, tileSize) {
		this.textureLoader = new TextureLoader();
		this.scene = scene;
		this.geometry = new BoxGeometry(tileSize, tileSize * 2, tileSize);
		this.texture = this.textureLoader.load("wall.jpg");
		this.material = new MeshPhongMaterial({
			shininess: 0,
			side: FrontSide,
			transparent: false,
			map: this.texture,
		});
		this.mesh = new Mesh(this.geometry, this.material);
		this.mesh.position.y = tileSize / 2;
		this.texture.wrapS = RepeatWrapping;
		this.texture.wrapT = RepeatWrapping;
		this.texture.repeat.x = 1;
		this.texture.repeat.y = 2;
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		//this.scene.add(this.mesh);
	}
}
