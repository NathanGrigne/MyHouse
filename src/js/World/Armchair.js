import { Object3D } from 'three'

export default class Armchair {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Armchair'

    this.createArmchair()
  }
  createArmchair() {
    this.armchair = this.assets.models.armchair.scene
    this.container.add(this.armchair)
  }
}