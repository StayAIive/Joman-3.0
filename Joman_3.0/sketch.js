const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg, bg2, bg3, bgImg;
var joman, jomanImg, powerfulJomanImg;
var ground, invisibleGround;
var platform, platformImg;
var powerup, powerupImg;
var powerup2, powerup2Img;
var bigMonster, bigMonsterImg;
var smallMonster, monsterImg, monster2Img, monster3Img, monster4Img, monster5Img;

var platformGroup//, jumpGroup;


function preload() {
    bgImg = loadImage("./assets/background.png");
    jomanImg = loadAnimation("./assets/Joman/animation.png", "./assets/Joman/animation2.png", "./assets/Joman/animation3.png", "./assets/Joman/animation4.png", "./assets/Joman/animation3.png", "./assets/Joman/animation2.png");
    powerfulJomanImg = loadAnimation(
        "./assets/Powerful Joman/Power Joman0001.png",
        "./assets/Powerful Joman/Power Joman0002.png",
        "./assets/Powerful Joman/Power Joman0003.png",
        "./assets/Powerful Joman/Power Joman0004.png",
        "./assets/Powerful Joman/Power Joman0005.png",
        "./assets/Powerful Joman/Power Joman0006.png",
        "./assets/Powerful Joman/Power Joman0007.png",
        "./assets/Powerful Joman/Power Joman0008.png",
        "./assets/Powerful Joman/Power Joman0009.png",
        "./assets/Powerful Joman/Power Joman0010.png",
        "./assets/Powerful Joman/Power Joman0011.png",
        "./assets/Powerful Joman/Power Joman0012.png",
        "./assets/Powerful Joman/Power Joman0013.png",
        "./assets/Powerful Joman/Power Joman0014.png",
        "./assets/Powerful Joman/Power Joman0015.png",
        "./assets/Powerful Joman/Power Joman0016.png",
        "./assets/Powerful Joman/Power Joman0017.png",
        "./assets/Powerful Joman/Power Joman0018.png");
    powerupImg = loadImage("./assets/Powerups/powerups.png");
    powerup2Img = loadImage("./assets/Powerups/powerups2.png");
    bigMonsterImg = loadImage("./assets/monsters/big monster.png");
    monsterImg = loadImage("./assets/monsters/small monsters/monster1.png");
    monster2Img = loadImage("./assets/monsters/small monsters/monster2.png");
    monster3Img = loadImage("./assets/monsters/small monsters/monster3.png");
    monster4Img = loadImage("./assets/monsters/small monsters/monster4.png");
    monster5Img = loadAnimation("./assets/monsters/small monsters/frog monster/frog close.png", "./assets/monsters/small monsters/frog monster/frog open.png");
    platformImg = loadImage("./assets/ground.png");




}
function setup() {
    createCanvas(1200, 900);
    engine = Engine.create();
    world = engine.world;

    platformGroup = new Group();
    //jumpGroup = new Group();

    bg = createSprite(width, height / 2, width, height);
    bg.addImage(bgImg);
    bg.scale = 0.85;
    bg.velocityX = -5;

    bg2 = createSprite(bg.position.x + 900, height / 2, width, height);
    bg2.addImage(bgImg);
    bg2.scale = 0.85;
    bg2.velocityX = -5;

    bg3 = createSprite(bg.position.x - 900, height / 2, width, height);
    bg3.addImage(bgImg);
    bg3.scale = 0.85;
    bg3.velocityX = -5;

    ground = createSprite(width / 2, 760, width, 10);
    ground.debug = true;
    //ground.visible = false;

    invisbleGround = createSprite(width / 2, 780, width, 10);
    //invisbleGround.debug = true;
    invisbleGround.visible = false;

    joman = createSprite(350, height - 250, 1, 1);
    joman.addAnimation("run", jomanImg);
    joman.addAnimation("powerful", powerfulJomanImg);
    joman.scale = 0.5;
    joman.setCollider("rectangle", 0, 0, 250, 390);
    joman.debug = true;
    //joman.changeAnimation("powerful");
    joman.frameDelay = 2;

    bigMonster = createSprite(-50, height - 450, 1, 1);
    bigMonster.addImage(bigMonsterImg);
    bigMonster.debug = true;

    //if(frameCount % 160 == 0){
    //platform = new Ground(1300, Math.round(random(150, 600)), Math.round(random(200, 800)), 50);
    //platform.debug = true;
    //}



}
function draw() {
    background(0)

    if (bg.position.x <= -900) {
        bg.position.x = bg3.position.x + 900;
    }

    if (bg2.position.x <= -900) {
        bg2.position.x = bg.position.x + 900;
    }

    if (bg3.position.x <= -900) {
        bg3.position.x = bg2.position.x + 900;
    }

    joman.collide(invisbleGround);
    joman.collide(bigMonster);
    //joman.collide(jumpGroup);

    joman.velocityY = joman.velocityY + 2;
    //console.log(joman.collide(floor));

    if (keyDown("space") && (joman.isTouching(ground) /*|| joman.isTouching(platformGroup)*/)) {
        joman.velocityY = joman.velocityY - 45;
    }

    //platform.moving();
    //platform.show();
    spawnPlatform();
    drawSprites();

    Engine.update(engine);


}

function spawnPlatform() {
    if (frameCount % 160 === 0) {
        platform = createSprite(1300, Math.round(random(150, 600)), Math.round(random(200, 800)), 50);
        //platform.addImage(platformImg);
        platform.scale = 0.5;
        platform.velocityX = -5;

        platform.lifetime = 400;

        //adjust the depth
        //cloud.depth = trex.depth;
        //trex.depth = trex.depth + 1;

        platformGroup.add(platform);

        console.log(platform.width);
        var monster = createSprite(platform.x - Math.round(random(-platform.width/2, platform.width/2)), platform.y - 125, 100, 100);
        console.log(monster.x -1300) ;
        monster.scale = 0.25;
        monster.velocityX = -5;
        var rand = Math.round(random(1, 5));
        /*switch (rand) {
            case 1: monster.addImage(monsterImg);
                break;
            case 2: monster.addImage(monster2Img);
                break;
            case 3: monster.addImage(monster3Img);
                break;
            case 4: monster.addImage(monster4Img);
                break;
            case 5: monster.addAnimation("special", monster5Img);
            monster.frameDelay = 60;
                break;
            default: break;
        }*/
    }
}
