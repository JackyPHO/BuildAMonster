class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;
        this.reyeX = this.bodyX + 40;
        this.reyeY = this.bodyY - 25;
        this.leyeX = this.bodyX - 40;
        this.leyeY = this.reyeY;
        this.rarmX = this.bodyX + 75;
        this.rarmY = this.bodyY + 25;
        this.larmX = this.bodyX - 75;
        this.larmY = this.rarmY;
        this.rlegX = this.bodyX + 75;
        this.rlegY = this.bodyY + 135;
        this.llegX = this.bodyX - 75;
        this.llegY = this.rlegY;
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 50;
        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 15;
        this.rantX = this.bodyX + 50;
        this.rantY = this.bodyY - 100;
        this.lantX = this.bodyX - 50;
        this.lantY = this.rantY;

        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_human_green.png");
        my.sprite.reye = this.add.sprite(this.reyeX, this.reyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.reye.scaleX = 0.5;
        my.sprite.reye.scaleY = 0.5;
        my.sprite.leye = this.add.sprite(this.leyeX, this.leyeY, "monsterParts", "eye_angry_green.png");
        my.sprite.leye.flipX = true;
        my.sprite.leye.scaleX = 0.5;
        my.sprite.leye.scaleY = 0.5;

        my.sprite.rarm = this.add.sprite(this.rarmX, this.rarmY, "monsterParts", "arm_blueE.png");
        my.sprite.larm = this.add.sprite(this.larmX, this.larmY, "monsterParts", "arm_blueE.png");
        my.sprite.larm.flipX = true;
        my.sprite.larm.scaleX = 0.75;
        my.sprite.larm.scaleY = 0.75;
        my.sprite.rarm.scaleX = 0.75;
        my.sprite.rarm.scaleY = 0.75;

        my.sprite.rleg = this.add.sprite(this.rlegX, this.rlegY, "monsterParts", "leg_whiteE.png");
        my.sprite.lleg = this.add.sprite(this.llegX, this.llegY, "monsterParts", "leg_whiteE.png");
        my.sprite.lleg.flipX = true;

        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthF.png");


        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_yellow.png");

        my.sprite.rant = this.add.sprite(this.rantX, this.rantY, "monsterParts", "detail_dark_antenna_small.png");
        my.sprite.lant = this.add.sprite(this.lantX, this.lantY, "monsterParts", "detail_dark_antenna_small.png");
        my.sprite.lant.flipX = true;

        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        sKey.on('down',(key,event)=>{
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
            my.sprite.mouth.visible = false;
        });
        fKey.on('down',(key,event)=>{
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
            my.sprite.mouth.visible = false;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.aKey.isDown){
            my.sprite.body.x -= 1;
            my.sprite.eye.x -= 1;
            my.sprite.reye.x -= 1;
            my.sprite.leye.x -= 1;
            my.sprite.nose.x -= 1;
            my.sprite.mouth.x -= 1;
            my.sprite.rarm.x -= 1;
            my.sprite.larm.x -= 1;
            my.sprite.rleg.x -= 1;
            my.sprite.lleg.x -= 1;
            my.sprite.rant.x -= 1;
            my.sprite.lant.x -= 1;
            my.sprite.fangs.x -= 1;
            my.sprite.smile.x -= 1;
        }
        if(this.dKey.isDown){
            my.sprite.body.x += 1;
            my.sprite.eye.x += 1;
            my.sprite.reye.x += 1;
            my.sprite.leye.x += 1;
            my.sprite.nose.x += 1;
            my.sprite.mouth.x += 1;
            my.sprite.rarm.x += 1;
            my.sprite.larm.x += 1;
            my.sprite.rleg.x += 1;
            my.sprite.lleg.x += 1;
            my.sprite.rant.x += 1;
            my.sprite.lant.x += 1;
            my.sprite.fangs.x += 1;
            my.sprite.smile.x += 1;
        }
    }

}