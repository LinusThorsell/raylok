let left = false;
let up = false;
let right = false;
let down = false;

document.addEventListener('keydown', () => {
    let key = event.keyCode;
    if(key == 65 || key == 37) {
        //left a
        left = true;
    }
    if(key == 87 || key == 38) {
        //up w
        up = true;
    }
    if(key == 68 || key == 39) {
        //right d
        right = true;
    }
    if(key == 83 || key == 40) {
        //down s
        down = true;
    }
});
document.addEventListener('keyup', () => {
    let key = event.keyCode;
    if(key == 65 || key == 37) {
        //left a
        left = false;
    }
    if(key == 87 || key == 38) {
        //up w
        up = false;
    }
    if(key == 68 || key == 39) {
        //right d
        right = false;
    }
    if(key == 83 || key == 40) {
        //down s
        down = false;
    }
});