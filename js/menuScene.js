/* global Phaser */


// This is the Menu Scene

class MenuScene extends Phaser.Scene {
    constructor () {
      super({ key: 'menuScene' })
  
      this.titleSceneBackgroundImage = null
      // this.titleSceneText = null
      // this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
    }
  
    init (data) {
      this.cameras.main.setBackgroundColor('#ffffff')
    }
  
    preload () {
      console.log('Menu Scene')
      this.load.image('menuSceneBackground', './assets/assets/aliens_screen_image2.jpg')
      this.load.image('startButton', './assets/assets/start.png')
    }
  
    create (data) {
        this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
        this.menuSceneBackgroundImage.x = 1920 / 2
        this.menuSceneBackgroundImage.y = 1080 / 2
  
        this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 250, 'startButton')
        this.startButton.setInteractive({ useHandCursor: true })
        this.startButton.on('pointerdown', () => this.clickButton())
      // this.titleSceneText = this.add.text(1920 / 2, (1080 / 2) + 350, 'Space Aliens', this.titleSceneTextStyle).setOrigin(0.5)
    }
  
    update (time, delta) {
      // if (time > 6000) {
      //   this.scene.switch('menuScene')
      // }
    }

    clickButton () {
        this.scene.start('gameScene')
      }
  }
  
  export default MenuScene