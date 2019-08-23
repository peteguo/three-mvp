import * as THREE from '../libs/three.js'
import game from './game'
window.THREE = THREE

class Main {
    constructor () {
    }

    static init(){
        game.init()
    }
}

export default Main
