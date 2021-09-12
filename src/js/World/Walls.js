import { Object3D } from 'three'

export default class Walls {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Walls'

    this.createWalls()
  }
  createWalls() {
    this.walls = this.assets.models.walls.scene
    this.container.add(this.walls)
  }
}