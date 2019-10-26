"use strict";

export default class CanvasManager {
    constructor(can) {
        console.log("Create canvasManager");
        this.holst = can.getContext("2d");
        this.drawBackground();
        this.deltaX = 0;
        this.importImages();
    }

    importImages() {
        this.fon = new Image();
        this.fon.src = "fon.jpg";
        this.dock = new Image();
        this.dock.src = "dock.jpg";
        this.floor = new Image();
        this.floor.src = "floor.png";
        this.snake = new Image();
        this.snake.src = "snake.png";
        this.krot = new Image();
        this.krot.src = "krot.png";
        this.krot2 = new Image();
        this.krot2.src = "krot2.png"
    }

    moveDeltaX(value) {
        this.deltaX += value;
    }

    drawBackground() {
        this.holst.clearRect(0, 0, 800, 600);

        try {
            this.holst.drawImage(this.fon, 0, 0, 1280, 720);
        } catch (err) {
            // err
        };
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

        try {
            this.holst.drawImage(this.dock, wall.x + this.deltaX, wall.y, wall.w, wall.h);
        } catch (err) {
            // err
        }

        if(wall.w > 7000) {
            try {
                this.holst.drawImage(this.floor, wall.x + this.deltaX, wall.y, wall.w, wall.h);
            } catch (err) {
                // err
            }
        }
    }

    drawWallsArray(wallsArray) {
        wallsArray.forEach((wall) => {
            this.drawWall(wall);
        });
    }

    drawTask(task) {
        this.holst.lineWidth = 2;
        this.holst.strokeStyle = "#0000FF";

        try {
            this.holst.drawImage(this.snake, task.x + this.deltaX, task.y - 25 + 3, task.size, task.size + 60);
        } catch (err) {
            // err
        }

        /*
        this.simpleRectangle(
            task.x, task.y, task.size, task.size,
        );
        */
    }

    drawTasksArray(taskArray) {
        taskArray.forEach((task) => {
            this.drawTask(task);
        });
    }

    drawHero(hero, last) {
        this.holst.lineWidth = 3;
        this.holst.strokeStyle = "#00FF00";

        if(last === "right") {
            try {
                this.holst.drawImage(this.krot, hero.x + this.deltaX - 20, hero.y - 20, hero.size + 40, hero.size + 38);
            } catch (err) {
                // err
            }
        } else {
            try {
                this.holst.drawImage(this.krot2, hero.x + this.deltaX - 20, hero.y - 20, hero.size + 40, hero.size + 38);
            } catch (err) {
                // err
            }
        }

        /*
        this.simpleRectangle(
            hero.x, hero.y, hero.size, hero.size
        );
        */
    }
}
