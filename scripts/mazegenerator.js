//TODO Generate maze
let generatedWalls = [];
let visitStack = [];
let cells = [];
let xwidth = 15;
let ywidth = 15;
let treasure;
function generateMaze(size) {

    for (let x = 0; x < xwidth; x++) {
        for (let y = 0; y < ywidth; y++) {
            cells.push(new Cell(x, y))
        }
    }

    recursiveMazeGeneration(cells[0]);

    return generatedWalls;
}

//cs = currently selected
function recursiveMazeGeneration(cs) {
    cs.visit();

    let neighbors = getNeighbors(cs);
    let nextVisit = neighbors[Math.floor(Math.random() * neighbors.length)];
    
    if (neighbors.length > 0) {
        removeWalls(cs, nextVisit);
        visitStack.push(cs);
        recursiveMazeGeneration(nextVisit);
    }
    else if (visitStack.length > 0) {
        //Check if deepest point to hide the treasure
        if (!treasure) {
            treasure = visitStack[visitStack.length-1].getMiddleLocation();
        }
        
        //handle backtrack
        recursiveMazeGeneration(visitStack.pop())
    }
    else {
        //add all remaining walls to returnarray when finished
        cells.forEach(cell => {
            cell.getWalls().forEach(el => {
                generatedWalls.push(el)
            });
        });
    }
}
function getNeighbors(cs) {
    let column = cs.getColl();
    let row = cs.getRow();

    let options = [];
    
    let top = cells[getIndex(row, column - 1)];
    let right = cells[getIndex(row + 1, column)];
    let bottom = cells[getIndex(row, column + 1)];
    let left = cells[getIndex(row - 1, column)];

    if (top && !top.isVisited()) {
        options.push(top);
    }
    if (right && !right.isVisited()) {
        options.push(right);
    }
    if (bottom && !bottom.isVisited()) {
        options.push(bottom);
    }
    if (left && !left.isVisited()) {
        options.push(left);
    }
    
    return options;
}
function getIndex(row, coll) {
    if (row < 0 || coll < 0 || row > xwidth-1 || coll > ywidth-1) {
        return -1;
    }
    return (row + coll * xwidth);
}
function removeWalls(a, b) {
    var x = a.getColl() - b.getColl();
    if (x === 1) {
        a.rLeft();
        b.rRight();
    }
    else if (x === -1) {
        a.rRight();
        b.rLeft();
    }

    var y = a.getRow() - b.getRow();
    if (y === 1) {
        a.rTop()
        b.rBottom()
    }
    else if (y === -1) {
        a.rBottom()
        b.rTop();
    }
}

let cellSize = 100;
class Cell {
    constructor(coll, row) {
        this.coll = coll;
        this.row = row;
        this.walls = [true, true, true, true];
        this.visited = false;
        this.middleLocation = new Point(this.coll * cellSize + cellSize/2, this.row * cellSize + cellSize/2);
    }
    getWalls() {
        let tempWalls = [];
        //top
        if (this.walls[0]) {
            tempWalls.push(new Line(this.coll*cellSize, this.row*cellSize, this.coll*cellSize + cellSize, this.row*cellSize));
        }
        //right
        if (this.walls[1]) {
            tempWalls.push(new Line(this.coll*cellSize + cellSize, this.row*cellSize, this.coll*cellSize + cellSize, this.row*cellSize + cellSize));
        }
        //bottom
        if (this.walls[2]) {
            tempWalls.push(new Line(this.coll*cellSize + cellSize, this.row*cellSize + cellSize, this.coll*cellSize, this.row*cellSize + cellSize));
        }
        //left
        if (this.walls[3]) {
            tempWalls.push(new Line(this.coll*cellSize, this.row*cellSize + cellSize, this.coll*cellSize, this.row*cellSize));
        }
        return tempWalls;
    }
    rTop() {
        this.walls[0] = false;
    }
    rRight() {
        this.walls[1] = false;
    }
    rBottom() {
        this.walls[2] = false;
    }
    rLeft() {
        this.walls[3] = false;
    }
    visit() {
        this.visited = true;
    }
    isVisited() {
        return this.visited;
    }
    getColl() {
        return this.coll;
    }
    getRow() {
        return this.row;
    }
    hide() {
        this.walls = [false, false, false, false]
    }
    getMiddleLocation() {
        return this.middleLocation;
    }
}