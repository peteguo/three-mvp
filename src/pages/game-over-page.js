import { TetrahedronGeometry } from "../../libs/three";

export default class GameOVerPage {
    constructor (callbacks){
        this.callbacks = callbacks
    }

    init () {
        this.initGameoverCanvas()
    }
    initGameoverCanvas() {
        const aspect = window.innerHeight/window.innerWidth
        this.canvas = document.createElement('canvas')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.texture = new THREE.Texture(this.canvas)
        this.material = new THREE.MeshBasicMa({
            map:this.texture,
            transparent:true
        })
        this.geometry = new THREE.planGeometry()

    }
    show () {
        console.log('game over page show')
    }
}