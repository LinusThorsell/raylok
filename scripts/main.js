$(document).ready(() => {
    initializeGame(true);
});

function initializeGame(debug) {
    startEngine(debug);
    startRenderer();
}

function startRenderer() {
    $("#game").hide()
    
    let html = "";
    let res = 20;
    for (let i = 0; i < res; i++) {
        html += "<textarea class='linewidth'></textarea>"
    }

    $("#content--main").html(html);
}

function splashScreen() {
    let frames = 17;
    let f = 0;
    let totalLoops = 3;
    let loop = 0;

    recursiveFrames(f, frames, loop, totalLoops);
}

function recursiveFrames(f, frames, loop, totalLoops) {

    if (f < frames+1) {
        let frame = "";
        frame += getWhiteLines(5, false);    
        frame += getLogo(f);
        frame += getWhiteLines(4, false);
        frame += getWhiteLines(1, true)
        $("#game").val(frame)
        setTimeout(() => {
            recursiveFrames(f+1, frames, loop, totalLoops);
        }, 70)
    }
    else if (loop <= totalLoops) {
        if (loop == totalLoops) {
            frames = 8;
        }
        recursiveFrames(5, frames, loop+1, totalLoops);
    }
}