import { Object3D } from 'three'

export default class Tv {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Tv'

    this.createTv()
  }
  createTv() {
    this.tv = this.assets.models.tv.scene
    this.container.add(this.tv)
  }
}