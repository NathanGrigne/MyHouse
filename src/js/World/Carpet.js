import { Object3D } from 'three'

export default class Carpet {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Carpet'

    this.createCarpet()
  }
  createCarpet() {
    this.carpet = this.assets.models.carpet.scene
    this.container.add(this.carpet)
  }
}