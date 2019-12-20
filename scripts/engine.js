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

    lines.push(new Line(250, 250, 250, 400));
    lines.push(new Line(250, 400, 400, 400));
    lines.push(new Line(400, 400, 250, 400));
    lines.push(new Line(250, 400, 250, 250));
}

function gameLoop() {
    cleanUp();
    tick();
    drawGraphics();
    drawMap();
    drawPlayer();
}
function cleanUp() {
    cleanMap();
    //cleanData();
}

function cleanMap() {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 500)
    ctx.closePath();
}
function cleanData() {
    //Clean up eventual future cleanups
}

function tick() {
    movePlayer();
}
function drawGraphics() {
    let html = "";
    let res = 20;
    for (let i = 0; i < res; i++) {
        if (intersects[i]) {
            html += "<textarea class='linewidth' style='" + "color: rgb(0, " + (255 - intersects[i].getLength()) + ", 0);" + "'>------------------------------------</textarea>"
        }
        else {
            html += "<textarea class='linewidth'></textarea>"
        }        
    }

    $("#content--main").html(html);
}

function drawMap() {
    drawLines();
}
function drawLines() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#00aa00"
    for (let l = 0; l < lines.length; l++) {
        ctx.moveTo(lines[l].getP1().x, lines[l].getP1().y);
        ctx.lineTo(lines[l].getP2().x, lines[l].getP2().y);
    }
    ctx.stroke();
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

    if (lookleft) {
        player.move(4);
    }
    if (lookright) {
        player.move(5);
    }
}
let playerWidth = 25;
function drawPlayer() {
    ctx.fillStyle = "#005500"
    ctx.fillRect(player.getPos().x - (playerWidth/2), player.getPos().y - (playerWidth/2), playerWidth, playerWidth);

    createRays();
    drawRays();
    drawIntersects();
}

let rays = [];
function createRays() {
    rays = [];
    let startAngle = player.getDirection();
    let rayCount = 20;
    let displacementAngle = 3;

    for (let r = 0; r < rayCount; r++) {
        rays.push(new Ray(degToRad(startAngle + (r * displacementAngle))));
    }
}
function drawRays() {
    ctx.strokeStyle = "#00ff00"
    for (let r = 0; r < rays.length; r++) {
        ctx.moveTo(rays[r].getP1().x, rays[r].getP1().y);
        ctx.lineTo(rays[r].getP2().x, rays[r].getP2().y);
    }
    ctx.stroke();
}
let intersects = [];
function drawIntersects() {
    intersects = [];
    for (let r = 0; r < rays.length; r++) {
        for (let l = 0; l < lines.length; l++) {
            let p = intersectionPoint(rays[r].getP1().x, rays[r].getP1().y, rays[r].getP2().x, rays[r].getP2().y, lines[l].getP1().x, lines[l].getP1().y, lines[l].getP2().x, lines[l].getP2().y);
            if (p) {
                let length = distance(player.getPos(), p);
                //if (!intersects[r]) {
                    intersects[r] = (new rayIntersection(p, r, length))
                //}
                //else if (intersects[r].getLength() > length) {
                    intersects[r] = (new rayIntersection(p, r, length))
                //}
                //else {

                //}
                ctx.fillStyle = "#ff0000"
                ctx.fillRect(intersects[r].getPoint().x - 5, intersects[r].getPoint().y - 5, 10, 10);
            }
        }
    }
}