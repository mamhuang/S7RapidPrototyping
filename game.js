class Title extends Phaser.Scene {
    constructor(){
        super('title')
    }
    create(){
        this.add.text(50, 50, "Roly Poly: To the End").setFontSize(50)
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('prelevel1')
        })
    }
}
class PreLevel1 extends Phaser.Scene {
    constructor() {
        super('prelevel1')
    }
    
    create() {
        this.add.text(50,50,"Watch out for slugs!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('level1')
        })
    }
}
class Level1 extends Phaser.Scene {
    constructor() {
        super('level1')
    }
    
    create() {
        this.add.text(50,50,"Gameplay with 2 slugs, click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('postlevel1')
        })
    }
}
class PostLevel1 extends Phaser.Scene {
    constructor() {
        super('postlevel1')
    }
    
    create() {
        this.add.text(50,50,"That's good work!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('prelevel2')
        })
    }
}
class PreLevel2 extends Phaser.Scene {
    constructor() {
        super('prelevel2')
    }
    
    create() {
        this.add.text(50,50,"Watch out for snails!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('level2')
        })
    }
}
class Level2 extends Phaser.Scene {
    constructor() {
        super('level2')
    }
    
    create() {
        this.add.text(50,50,"Gameplay with 2 nails, click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('postlevel2')
        })
    }
}
class PostLevel2 extends Phaser.Scene {
    constructor() {
        super('postlevel2')
    }
    
    create() {
        this.add.text(50,50,"Good job!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('prelevel3')
        })
    }
}
class PreLevel3 extends Phaser.Scene {
    constructor() {
        super('prelevel3')
    }
    
    create() {
        this.add.text(50,50,"This is the last level!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('level3')
        })
    }
}
class Level3 extends Phaser.Scene {
    constructor() {
        super('level3')
    }
    
    create() {
        this.add.text(50,50,"Gameplay with both snails and slugs")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('postlevel3')
        })
    }
}
class PostLevel3 extends Phaser.Scene {
    constructor() {
        super('postlevel3')
    }
    
    create() {
        this.add.text(50,50,"The roly poly gets a badge!")
        this.add.text(50,100,"Click to continue")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('victory')
        })
    }
}
class Victory extends Phaser.Scene {
    constructor() {
        super('victory')
    }
    
    create() {
        this.add.text(50,50,"Victory animations!")
        this.add.text(50,100,"Click to restart game")
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0)})
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('title')
        })
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        
    },
    scene: [Title, PreLevel1, Level1, PostLevel1, PreLevel2,Level2,PostLevel2,PreLevel3,PostLevel3,Victory],
    title: "Adventure Game",
    audio: {disableWebAudio: true},

});
