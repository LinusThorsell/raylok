function getWhiteLines(count) {
    let content = "";
    for (let c = 0; c < count; c++) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    return content;
}
function getLogo(frame) {
    let content = "";
    
    if (frame == 0) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n"; 
    }
    else if (frame == 1) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 2) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 3) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "Y - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - K - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 4) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "A - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - Y - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - O - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - K - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 5) {
        content += "R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - A - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - Y - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - L - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - O - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - K - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 6) {
        content += "- - - R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - A - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - Y - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - L - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - O - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - K - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 7) {
        content += "- - - - - - R - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - A - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - Y - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - L - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - O - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - K - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 8) {
        content += "- - - - - - - - - R - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - A - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - Y - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - L - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - O - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - K - - - - - - - - - - - -\n";
    }
    else if (frame == 9) {
        content += "- - - - - - - - - - - - R - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - A - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - Y - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - L - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - O - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - K - - - - - - - - -\n";
    }
    else if (frame == 10) {
        content += "- - - - - - - - - - - - - - - R - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - A - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - Y - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - L - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - O - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - K - - - - - -\n";
    }
    else if (frame == 11) {
        content += "- - - - - - - - - - - - - - - - - - R - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - A - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - Y - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - L - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - O - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - K - - -\n";
    }
    else if (frame == 12) {
        content += "- - - - - - - - - - - - - - - - - - - - - R - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - A - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - Y - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - L - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - O - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - K\n";
    }
    else if (frame == 13) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - R - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - A - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Y - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - L - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - O\n";
        content += "K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 14) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - R - - - - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - A - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Y - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - L\n";
        content += "O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 15) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - R - - - - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - A - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Y\n";
        content += "L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - K - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 16) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - R - - -\n";
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - A\n";
        content += "Y - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - O - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - K - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }
    else if (frame == 17) {
        content += "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - R\n";
        content += "A - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - Y - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - L - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - O - - - - - - - - - - - - - - - - - - - - - - - - - - -\n";
        content += "- - - - - - - - - - - - K - - - - - - - - - - - - - - - - - - - - - - - -\n";
    }

    return content;
}


class Ray {
    constructor(rad) {
        this.p1 = new Point(player.getPos().x, player.getPos().y);
        this.p2 = this.calculateRay()
        this.rad = rad;
        this.length = 100;
    }
    //TODO FIX MAKING 2nd POINT
    calculateRay() {
        let y = Math.sin(rad) * this.length;
        let x = Math.cos(rad) * this.length;
        p1 = new Point(player.getPos().x, player.getPos().y)
        p2 = new Point(x, y);
    }
}
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3;
    }
    getPos() {
        return new Point(this.x, this.y)
    }
    move(direction) {
        switch(direction) {
            case 0:
                this.x -= this.speed;
                break;
            case 1:
                this.y -= this.speed;
                break;
            case 2:
                this.x += this.speed;
                break;
            case 3:
                this.y += this.speed;
        }
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Line {
    constructor(x1, x2, y1, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }
    getXPoint() {
        return new Point(this.x1, this.x2);
    }
    getYPoint() {
        return new Point(this.y1, this.y2);
    }
}