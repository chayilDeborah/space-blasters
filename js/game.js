/* global Phaser */ 


import SplashScene from './splashScene.js'

// Our game scenes
const splashScene = new SplashScene()

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    margin: 0,
    physics:{
      default: 'arcade',
      arcade: {
        debug: true
      }  
    },
     // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        // we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
      }

}

const game = new Phaser.Game(config)
console.log(game)
// load scenes
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')