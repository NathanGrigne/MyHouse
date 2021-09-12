import { Object3D } from 'three'

export default class CoffeeTable {
  constructor(options) {
    // Options
    this.time = options.time
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'CoffeeTable'

    this.createCoffeeTable()
  }
  createCoffeeTable() {
    this.coffeeTable = this.assets.models.coffee_table.scene
    this.container.add(this.coffeeTable)
  }
}