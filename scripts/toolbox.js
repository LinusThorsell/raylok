class Ray {
    constructor(rad) {
        this.p1, this.p2;
        this.rad = rad;
        this.length = 250;
        this.calculateRay();
    }
    calculateRay() {
        let addedX = Math.cos(this.rad) * this.length;
        let addedY = Math.sin(this.rad) * this.length;
        this.p1 = new Point(player.getPos().x, player.getPos().y)
        this.p2 = new Point(player.getPos().x + addedX, player.getPos().y + addedY);
    }
    getP1() {
        return this.p1;
    }
    getP2() {
        return this.p2;
    }
    getAngle() {
        return this.rad;
    }
}
class rayIntersection {
    constructor(point, rayId, length) {
        this.point = point;
        this.rayId = rayId;
        this.length = length;
    }
    getId() {
        return this.rayId;
    }
    getPoint() {
        return this.point;
    }
    getLength() {
        return this.length;
    }
}
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.rotationalSpeed = 5;
        this.direction = 0;
    }
    getPos() {
        return new Point(this.x, this.y)
    }
    getDirection() {
        return this.direction;
    }
    move(direction) {
        switch(direction) {
            //left
            case 0:
                this.y += this.speed * Math.sin(degToRad(-90 + this.direction + ((screenResolution/2) * displacementAngle)));
                this.x += this.speed * Math.cos(degToRad(-90 + this.direction + ((screenResolution/2) * displacementAngle)));
                break;
            //up
            case 1:
                this.y += this.speed * Math.sin(degToRad(this.direction + ((screenResolution/2) * displacementAngle)));
                this.x += this.speed * Math.cos(degToRad(this.direction + ((screenResolution/2) * displacementAngle)));
                break;
            //right
            case 2:
                this.y += this.speed * Math.sin(degToRad(90 + this.direction + ((screenResolution/2) * displacementAngle)));
                this.x += this.speed * Math.cos(degToRad(90 + this.direction + ((screenResolution/2) * displacementAngle)));
                break;
            //down
            case 3:
                this.y -= this.speed * Math.sin(degToRad(this.direction + ((screenResolution/2) * displacementAngle)));
                this.x -= this.speed * Math.cos(degToRad(this.direction + ((screenResolution/2) * displacementAngle)));
                break;
            //rotation
            case 4:
                this.direction -= this.rotationalSpeed;
                break;
            case 5:
                this.direction += this.rotationalSpeed;
                break;
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
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }
    getP1() {
        return new Point(this.x1, this.y1);
    }
    getP2() {
        return new Point(this.x2, this.y2);
    }
}

function degToRad(deg) {
    return deg * (Math.PI/180);
}

function intersectionPoint(x1, y1, x2, y2, x3, y3, x4, y4) {
    //https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
    //https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting
    const bot = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (bot == 0) {
      return null;
    }
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / bot;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / bot;
    if (0 < t && t < 1 && 1 > u && u > 0) {
      return new Point(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    } 
    else {
      return null;
    }
}

function distance(p1, p2, angle1, angle2) {
    return Math.cos(angle1 - angle2 - degToRad((screenResolution/2) * displacementAngle)) * Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}