var c, ctx, player;
let lines = [];

function startEngine() {
    c = document.getElementById("map--canvas");
    ctx = c.getContext("2d");    

    player = new Player(100, 100);
    generateWorld();
    setInterval(gameLoop, 20);
}

function generateWorld() {
    lines.push(new Line(0, 0, 500, 0))
    lines.push(new Line(500, 0, 500, 500))
    lines.push(new Line(500, 500, 0, 500))
    lines.push(new Line(0, 500, 0, 0))

    lines.push(new Line(400, 200, 400, 300));
    lines.push(new Line(400, 300, 200, 300));
    lines.push(new Line(200, 300, 200, 200));
    lines.push(new Line(200, 200, 400, 200));
}

function gameLoop() {
    cleanUp();
    tick();
    drawMap();
    drawPlayer();
}
function cleanUp() {
    cleanMap();
    //cleanData();
}

function cleanMap() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 500, 500)
}
function cleanData() {
    //Clean up eventual future cleanups
}

function tick() {
    movePlayer();
}

function drawMap() {
    drawBorder();
    drawLines();
}
function drawBorder() {
}
function drawLines() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#00aa00"
    for (let l = 0; l < lines.length; l++) {
        ctx.moveTo(lines[l].getXPoint().x, lines[l].getXPoint().y);
        ctx.lineTo(lines[l].getYPoint().x, lines[l].getYPoint().y);
        ctx.stroke();
    }
}
function movePlayer() {
    if (left) {
        player.move(0);
    }
    if (up) {
        player.move(1);
    }
    if (right) {
        player.move(2);
    }
    if (down) {
        player.move(3);
    }
}
let playerWidth = 25;
function drawPlayer() {
    ctx.fillStyle = "#005500"
    ctx.fillRect(player.getPos().x - (playerWidth/2), player.getPos().y - (playerWidth/2), playerWidth, playerWidth);

    createRays(player.getPos().x, player.getPos().y);
}

let rays = [];
function createRays(xpos, ypos) {
    let x = xpos;
    let y = ypos;

    rays.push()

    ctx.moveTo(x, y);
    ctx.lineTo()
}