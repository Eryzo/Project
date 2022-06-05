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

    }

    draw1() {
        fill("white");
        rect(this.position.x--, this.position.y, this.width, this.height, "fill");
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
            y: 490

        }

    }

    draw1() {
        fill("white");
        rect(this.position.x--, this.position.y, this.width, this.height, "fill");
    }

}

// Start screen
function startscreen() {
    background("black");
    fill("white");
    font("44px Verdana");
    text("Square game", 250, 300, "fill");
    text("Click on the screen to start!", 100, 500, "fill");
}


// Game screen
function gamescreen() {
    state = "screen2";
    // Fill canvas

    background("black");
    ground(0, 550, "lightblue");

    // Draw the object from the array, looping the oject so it draws it at a certain set interval.
    player.draw1();
    for (object1 of obA) {
        object1.draw1();
    }
    for (object2 of obA2) {
        object2.draw1();
    }
    collision();
}

// End screen
function endgame() {
    background("black");
    fill("white");
    font("44px Verdana");
    text("Game Over!", 250, 300, "fill");
    text("Click on the screen to restart!", 100, 500, "fill");
}



