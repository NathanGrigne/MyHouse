import { Object3D } from 'three'

export default class Sofa {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'Sofa'

    this.createSofa()
  }
  createSofa() {
    this.sofa = this.assets.models.sofa.scene
    this.container.add(this.sofa)
  }
}
