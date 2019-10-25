"use strict";

export default class CanvasManager {
    constructor(can) {
        console.log("Create canvasManager");
        this.holst = can.getContext("2d");
        this.drawBackground();
        this.deltaX = 0;
    }

    moveDeltaX(value) {
        this.deltaX += value;
    }

    drawBackground() {
        this.holst.clearRect(0, 0, 800, 600);
        this.holst.fillStyle = "#CCCCCC";
        this.holst.fillRect(0, 0, 800, 600);
    }

    drawLine(x1, y1, x2, y2, lineWidth, color) {
        this.holst.lineWidth = parseInt(lineWidth);
        this.holst.strokeStyle = color;
        this.holst.beginPath();
        this.holst.moveTo(x1, y1);
        this.holst.lineTo(x2, y2);
        this.holst.closePath();
        this.holst.stroke();
    }

    simpleRectangle(x, y, w, h) {
        this.holst.strokeRect(x + this.deltaX, y, w, h);
    }

    drawWall(wall) {
        this.holst.lineWidth = 2;
        this.holst.strokeStyle = "#FF0000";
        this.simpleRectangle(
            wall.x, wall.y, wall.w, wall.h
        );
    }

    drawWallsArray(wallsArray) {
        wallsArray.forEach((wall) => {
            this.drawWall(wall);
        });
    }

    drawHero(hero) {
        this.holst.lineWidth = 3;
        this.holst.strokeStyle = "#00FF00";
        this.simpleRectangle(
            hero.x, hero.y, hero.size, hero.size
        );
    }
}
