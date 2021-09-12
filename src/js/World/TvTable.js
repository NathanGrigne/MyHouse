import { Object3D } from 'three'

export default class TvTable {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'TvTable'

    this.createTvTable()
  }
  createTvTable() {
    this.tvTable = this.assets.models.tv_table.scene
    this.container.add(this.tvTable)
  }
}