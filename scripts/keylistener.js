let left = false;
let up = false;
let right = false;
let down = false;
let lookleft = false;
let lookright = false;
let action1 = false;
let action2 = false;

document.addEventListener('keydown', () => {
    let key = event.keyCode;
    if(key == 65) {
        //left a
        left = true;
    }
    if(key == 87) {
        //up w
        up = true;
    }
    if(key == 68) {
        //right d
        right = true;
    }
    if(key == 83) {
        //down s
        down = true;
    }

    if(key == 37) {
        //lookleft leftarrow
        lookleft = true;
    }
    if(key == 39) {
        //lookright rightarrow
        lookright = true;
    }
    if(key == 38) {
        //action1 uparrow
        action1 = true;
    }
    if(key == 40) {
        //action2 downarrow
        action2 = true;
    }
});
document.addEventListener('keyup', () => {
    let key = event.keyCode;
    if(key == 65) {
        //left a
        left = false;
    }
    if(key == 87 || key == 38) {
        //up w
        up = false;
    }
    if(key == 68) {
        //right d
        right = false;
    }
    if(key == 83) {
        //down s
        down = false;
    }

    if(key == 37) {
        //lookleft leftarrow
        lookleft = false;
    }
    if(key == 39) {
        //lookright rightarrow
        lookright = false;
    }
    if(key == 38) {
        //action1 uparrow
        action1 = false;
    }
    if(key == 40) {
        //action2 downarrow
        action2 = false;
    }
});