"use strict";

const arr = [];

function addWall(x, y, w, h) {
    arr.push({x, y, w, h});
}

addWall(100, 400, 150, 160);
addWall(500, 300, 150, 260);
addWall(950, 400, 150, 160);
addWall(-4000, 550, 8000, 100);

export default function getWallsArray() {
    return arr;
}