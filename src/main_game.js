
var stage;
var requestAnimFrame;
var craigRotation = 0.0;
var craigRotationSpeed = 0.1;
var craigSprite;

function startGame(mainStage, updateFunction, config) {

    stage = mainStage;
    requestAnimFrame = updateFunction;

    // ask the renderer to call our animate function on every frame
    requestAnimFrame( update );

    var craigTexture = PIXI.Texture.fromImage("images/craig_simpsons.png");

    craigSprite = new PIXI.Sprite(craigTexture);

    // center the sprites anchor point
    craigSprite.anchor.x = 0.5;
    craigSprite.anchor.y = 0.5;

    // move the sprite t the center of the screen
    craigSprite.position.x = config.width/2;
    craigSprite.position.y = config.height/2;

    stage.addChild(craigSprite);


}

function update() {
    requestAnimFrame( update );
    craigSprite.rotation = craigRotation;
    craigRotation += craigRotationSpeed;
    if (craigRotation > Math.PI*2) {
        craigRotation = 0.0;
    }

    renderer.render(stage);
}