import { Object3D } from 'three'

export default class Shelf {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Shelf'

    this.createShelf()
  }
  createShelf() {
    this.shelf = this.assets.models.shelf.scene
    this.container.add(this.shelf)
  }
}