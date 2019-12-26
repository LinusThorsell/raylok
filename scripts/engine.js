var c, ctx, player, fps, lastCalledTime, averageFps;
let lines = [];
let fpsHistory = [];
let screenResolution = 58;
let displacementAngle = 1.2;
let isDebug = false;

let playArea = 2000;

function startEngine(debug) {
    isDebug = debug;
    
    if (isDebug) {
        c = document.getElementById("map--canvas");
        ctx = c.getContext("2d");
    }

    generateWorld();
    player = new Player(50, 50);
    setInterval(gameLoop, 33);
}

function generateWorld() {
    /*
    lines.push(new Line(0, 0, playArea, 0))
    lines.push(new Line(playArea, 0, playArea, playArea))
    lines.push(new Line(playArea, playArea, 0, playArea))
    lines.push(new Line(0, playArea, 0, 0))*/

    let generated = generateMaze();
    generated.forEach(wall => {
        lines.push(wall);
    });
}

function gameLoop() {
    cleanUp();
    tick();
    drawGraphics();

    if (isDebug) {
        checkFramerate();
        cleanMap();
        drawPlayer();
        drawMap();
    }
}
function cleanUp() {
    //cleanData();
}
function checkFramerate() {
    if(!lastCalledTime) {
       lastCalledTime = Date.now();
       fps = 0;
       return;
    }
    delta = (Date.now() - lastCalledTime)/1000;
    lastCalledTime = Date.now();
    fps = 1/delta;

    fpsHistory.unshift(fps);
    fpsHistory.length = 30;
    averageFps = 0;
    for (let i = 0; i < fpsHistory.length; i++) {
        averageFps += fpsHistory[i];
    }
    //console.log(averageFps/fpsHistory.length);
}

function cleanMap() {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.fillRect(0, 0, playArea, playArea)
    ctx.closePath();
}
function cleanData() {
    //Clean up eventual future cleanups
}

function tick() {
    movePlayer();
    createRays();
    createIntersects();
}
function drawGraphics() {
    let html = "";
    for (let i = 0; i < screenResolution; i++) {
        if (intersects[i]) {
            let length = intersects[i].getLength();

            html += "<textarea class='linewidth' style='" + "color: rgb(0, " + (255-length) + ", 0);" + "'>" + getRenderedLine(length) + "</textarea>";
        }
        else {
            html += "<textarea class='linewidth'></textarea>"
        }        
    }

    $("#content--main").html(html);
}

//------------------------------------
function getRenderedLine(length) {

    let emptyness;

    if (length < 9) {
        emptyness = 0;
    }
    else if (length < 18) {
        emptyness = 1;
    }
    else if (length < 27) {
        emptyness = 2;
    }
    else if (length < 36) {
        emptyness = 3;
    }
    else if (length < 45) {
        emptyness = 4;
    }
    else if (length < 54) {
        emptyness = 5;
    }
    else if (length < 63) {
        emptyness = 6;
    }
    else if (length < 72) {
        emptyness = 7;
    }
    else if (length < 81) {
        emptyness = 8;
    }
    else if (length < 90) {
        emptyness = 9;
    }
    else if (length < 99) {
        emptyness = 10;
    }
    else if (length < 108) {
        emptyness = 11;
    }
    else if (length < 117) {
        emptyness = 12;
    }
    else if (length < 126) {
        emptyness = 13;
    }
    else if (length < 135) {
        emptyness = 14;
    }
    else if (length < 144) {
        emptyness = 15;
    }
    else if (length < 153) {
        emptyness = 16;
    }
    else if (length < 162) {
        emptyness = 17;
    }
    else if (length < 171) {
        emptyness = 18;
    }
    else if (length < 180) {
        emptyness = 19;
    }
    else if (length < 189) {
        emptyness = 20;
    }
    else if (length < 198) {
        emptyness = 21;
    }
    else if (length < 207) {
        emptyness = 22;
    }
    else if (length < 216) {
        emptyness = 23;
    }
    else if (length < 225) {
        emptyness = 24;
    }
    else {
        emptyness = 25;
    }

    let line = "";

    line += getGraphic("empty", emptyness);
    line += getGraphic("wall", 50 - emptyness*2);
    line += getGraphic("empty", emptyness);

    return line
}
function getGraphic(type, lines) {
    let symbol;
    let result = "";

    switch (type) {
        case 'empty':
            symbol = "--";
            break;
        case 'wall':
            symbol = "WW";
            break;
    }

    for (let i = 0; i < lines; i++) {
        result += symbol;
    }
    return result;
}

function drawMap() {
    drawLines();
    drawTreasure();
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
function drawTreasure() {
    if (treasure) {
        let treasureWidth = 25;
        ctx.fillStyle = "#ffff00"
        ctx.fillRect(treasure.x - treasureWidth/2, treasure.y - treasureWidth/2, treasureWidth, treasureWidth)
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
    
    drawRays();
    drawIntersects();
}

let rays = [];
function createRays() {
    rays = [];
    let startAngle = player.getDirection();

    for (let r = 0; r < screenResolution; r++) {
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
function createIntersects() {
    intersects = [];
    for (let r = 0; r < rays.length; r++) {
        for (let l = 0; l < lines.length; l++) {
            let p = intersectionPoint(rays[r].getP1().x, rays[r].getP1().y, rays[r].getP2().x, rays[r].getP2().y, lines[l].getP1().x, lines[l].getP1().y, lines[l].getP2().x, lines[l].getP2().y);
            if (p) {
                let length = distance(player.getPos(), p, rays[r].getAngle(), degToRad(player.getDirection()));

                if (!intersects[r]) {
                    intersects[r] = (new rayIntersection(p, r, length))
                } 
                else if (intersects[r].length > length) {
                    intersects[r] = (new rayIntersection(p, r, length))
                }
            }
        }
    }
}
function drawIntersects() {
    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i]) {
            ctx.fillStyle = "#ff0000"
            ctx.fillRect(intersects[i].getPoint().x - 5, intersects[i].getPoint().y - 5, 10, 10);
        }
    }
}