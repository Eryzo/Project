class Player {
    constructor() {

        // Size 
        this.width = 20;
        this.height = 20;

        // Coordinate values
        this.position = {
            x: 40,
            y: 530
        }

    }

    draw1() {
        fill("white");
        rect(this.position.x, this.position.y, this.width, this.height, "fill");
    }

    move(event) {
        if (event.keyCode == 38) {
            player.position.y = 480;
        } else if (event.keyCode == 40) {
            player.position.y = 530;
        }
    }

}

class Object1 {
    constructor() {

        // Size 
        this.width = 20;
        this.height = 30;

        // Coordinate values
        this.position = {
            x: 800,
            y: 520

        }

        this.speed = {
            x: 1
        }

    }

    draw1() {
        fill("white");
        rect(this.position.x, this.position.y, this.width, this.height, "fill");

        // Collision detection
        if (player.position.x + player.width >= this.position.x && //left and right side
            player.position.x <= this.position.x + this.width &&
            player.position.y + player.height >= this.position.y && //top and bottom
            player.position.y <= this.position.y + this.height) {
            endgame(); clearInterval();
        }
    }

    move() {
        this.position.x += -this.speed.x;
        this.speed.x += 0.01;
    }
}

class Object2 {
    constructor() {

        // Size 
        this.width = 40;
        this.height = 20;

        // Coordinate values
        this.position = {
            x: randomInt(870, 1000),
            y: 480

        }

        this.speed = {
            x: 1
        }

    }

    draw1() {
        fill("white");
        rect(this.position.x, this.position.y, this.width, this.height, "fill");

        // Collision detection
        if (player.position.x + player.width >= this.position.x && //left and right side
            player.position.x <= this.position.x + this.width &&
            player.position.y + player.height >= this.position.y && //top and bottom
            player.position.y <= this.position.y + this.height) {
            endgame(); clearInterval();
        }
    }
    move() {
        this.position.x -= this.speed.x;
        this.speed.x += 0.01;
    }
}

function score1() {
    score += 1;
}

// Start screen
function startscreen() {
    background("black");
    fill("white");
    font("44px Verdana");
    text("Geometry Square", 200, 300, "fill");
    text("Click on the screen to start!", 100, 450, "fill");
    font("24px Verdana");
    text("When you lose the game, it will bring you back to this screen!", 30, 550, "fill");
}

// End game function
function endgame() {
    location.reload();
}


// Game screen
function gamescreen() {
    state = "screen2";
    // Fill canvas

    background("black");
    fill("white");
    text(score, 700, 50, "fill");
    ground(0, 550, "lightblue");

    // Draw the object from the array, looping the oject so it draws it at a certain set interval.
    player.draw1();
    for (object1 of obA) {
        object1.draw1();
        object1.move();
    }
    for (object2 of obA2) {
        object2.draw1();
        object2.move();
    }

}

