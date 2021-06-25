var bullet, wall;
var bulletImage, bullet2, wallSound;
var r, g, v, w, h, weight, thickness, speed;


function preload() {
    bulletImage = loadImage("bullet.png");
    bullet2 = loadImage("bullet2.png");

    wallSound = loadSound("wall.mp3");
}

function setup() {

    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);

    weight = Math.round(random(30,52));
    thickness = Math.round(random(22,83));
    speed = Math.round(random(223,321));
    //v = Math.round(random(50,60));
    console.log(v);

    bullet = createSprite(80,h/2,20,20);
    // bullet.addImage(bullet2);
    bullet.addImage(bulletImage);
    bullet.debug = true;
    bullet.scale = 0.42;
    bullet.velocityX = Math.round(random(30,50));;
    bullet.setCollider("rectangle",0,0,bullet.width,bullet.height);

    wall = createSprite(w/1.2,h/2,thickness,h/1.5);

    r = circle(w/1.3,30,20);
    r = shapeColour = "red";
    //r.visible = false;
    g = circle(w/1.3,70,20);
    g = shapeColour = "green";
    //g.visible = false;
}

function draw() {
    background("skyBlue");

    if (touching(wall,bullet)) {
        var d = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
        console.log(d)
    if (d < 10) {
        r.visible = true;
        bullet.velocityX = 0;
        bullet.addImage(bullet2);

    } else if (d > 10) {
        g.visible = true;
        wall.visible = false;
        bullet.velocityX = 0;
        // wallSound.play();
        bullet.addImage(bullet2);
    }
    }

    drawSprites();
}

function touching(a,b) {

    if (a.x - b.x < a.width/2 + b.width/2) {
        
        return true;
    } else {
        return false;
    }
}
