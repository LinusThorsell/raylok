$(document).ready(() => {
    startEngine();
    //initializeGame();
});

function initializeGame() {
    splashScreen();
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
        frame += getWhiteLines(5);    
        frame += getLogo(f);
        frame += getWhiteLines(5);
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