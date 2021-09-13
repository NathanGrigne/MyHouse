import { Object3D } from 'three'

export default class RbcMini {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'RbcMini'

    this.createRbcMini()
  }
  createRbcMini() {
    this.rbcmini = this.assets.models.rbc_mini.scene
    this.container.add(this.rbcmini)
  }
}