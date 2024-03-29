import { AxesHelper, Object3D } from 'three'

import AmbientLightSource from './AmbientLight'
import PointLightSource from './PointLight'
import LightTv from './LightTv'
import Sofa from './Sofa'
import Walls from './Walls'
import TvTable from './TvTable'
import CoffeeTable from './CoffeeTable'
import Tv from './Tv'
import Carpet from './Carpet'
import Shelf from './Shelf'
import Armchair from './Armchair'
import RbcMini from './RbcMini'

export default class World {
  constructor(options) {
    // Set options
    this.time = options.time
    this.debug = options.debug
    this.assets = options.assets

    // Set up
    this.container = new Object3D()
    this.container.name = 'World'

    if (this.debug) {
      this.container.add(new AxesHelper(5))
      this.debugFolder = this.debug.addFolder('World')
      this.debugFolder.open()
    }

    this.setLoader()
  }
  init() {
    this.setAmbientLight()
    this.setPointLight()
    this.setLightTv()
    this.setSofa()
    this.setWalls()
    this.setTvTable()
    this.setCoffeeTable()
    this.setTv()
    this.setCarpet()
    this.setShelf()
    this.setArmchair()
    this.setRbcMini()
  }
  setLoader() {
    this.loadDiv = document.querySelector('.loadScreen')
    this.loadModels = this.loadDiv.querySelector('.load')
    this.progress = this.loadDiv.querySelector('.progress')

    if (this.assets.total === 0) {
      this.init()
      this.loadDiv.remove()
    } else {
      this.assets.on('ressourceLoad', () => {
        this.progress.style.width = this.loadModels.innerHTML = `${
          Math.floor((this.assets.done / this.assets.total) * 100) +
          Math.floor((1 / this.assets.total) * this.assets.currentPercent)
        }%`
      })

      this.assets.on('ressourcesReady', () => {
        setTimeout(() => {
          this.init()
          this.loadDiv.style.opacity = 0
          setTimeout(() => {
            this.loadDiv.remove()
          }, 550)
        }, 1000)
      })
    }
  }
  setAmbientLight() {
    this.ambientlight = new AmbientLightSource({
      debug: this.debugFolder,
    })
    this.container.add(this.ambientlight.container)
  }
  setPointLight() {
    this.light = new PointLightSource({
      debug: this.debugFolder,
    })
    this.container.add(this.light.container)
  }
  setLightTv() {
    this.light2 = new LightTv({
      debug: this.debugFolder,
    })
    this.container.add(this.light2.container)
  }
  setSofa() {
    this.sofa = new Sofa({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.sofa.container)
  }
  setWalls() {
    this.walls = new Walls({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.walls.container)
  }
  setTvTable() {
    this.TvTable = new TvTable({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.TvTable.container)
  }
  setCoffeeTable() {
    this.CoffeeTable = new CoffeeTable({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.CoffeeTable.container)
  }
  setTv() {
    this.Tv = new Tv({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.Tv.container)
  }
  setCarpet() {
    this.Carpet = new Carpet({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.Carpet.container)
  }
  setShelf() {
    this.Shelf = new Shelf({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.Shelf.container)
  }
  setArmchair() {
    this.Armchair = new Armchair({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.Armchair.container)
  }
  setRbcMini() {
    this.RbcMini = new RbcMini({
      time: this.time,
      assets: this.assets,
    })
    this.container.add(this.RbcMini.container)
  }
}
