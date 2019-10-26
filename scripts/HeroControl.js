"use strict";

import global from "./global";

export default class HeroControl {
    constructor() {
        console.log("Create HeroControl");
        this.w = false;
        this.a = false;
        this.s = false;
        this.d = false;
        this.addDownEvent();
        this.addUpEvent();
        /////
        this.hero = {
            x: 350,
            y: 100,
            size: 80,
        }
        ////
        this.canJUMP = false;
        this.gravity = 0.3;
        ////
        this.speedY = 0;
        this.speedX = 7;
        ////
        this.last = "right";
    }

    hitPointWall(wall, xx, yy) {
        if(wall.x < xx && xx < wall.x + wall.w) {
            if(wall.y < yy && yy < wall.y + wall.h) {
                return true;
            }
        }
        return false;
    }

    renderTask(tasksArray, dialogBox, controlDialogBtn) {
        const xx = this.hero.x + this.hero.size / 2;
        const yy = this.hero.y + this.hero.size / 2;
        dialogBox.innerHTML = "";

        tasksArray.forEach((task) => {
            if(this.hitPointWall(task, xx, yy) === true) {
                dialogBox.innerHTML = task.text;
                global().tests = task.testsArr;
                global().friend = task;
            }
        });

        if(dialogBox.innerHTML) 
            controlDialogBtn.hidden = false;
        else 
            controlDialogBtn.hidden = true;
    }

    hitPointWithWallsArray(xx, yy, wallsArray) {
        for(let i = 0; i < wallsArray.length; i++) {
            if(this.hitPointWall(wallsArray[i], xx, yy) === true) {
                return wallsArray[i];
            }
        }
        return false;
    } 

    moveLeft(canvasManager) {
        this.hero.x -= this.speedX;
        canvasManager.moveDeltaX(this.speedX);
        this.last = "left";
    }

    moveRight(canvasManager) {
        this.hero.x += this.speedX;
        canvasManager.moveDeltaX(-this.speedX);
        this.last = "right";
    }

    getLast() {
        return this.last;
    }

    moveX(wallsArray, canvasManager) {
        if(global().dialog) {
            if(this.a === true) {
                const xx = this.hero.x - this.speedX;
                const yy = this.hero.y + this.hero.size;
                if(this.hitPointWithWallsArray(xx, yy - 2, wallsArray) === false) {
                    this.moveLeft(canvasManager);
                }
            } 

            if(this.d === true) {
                const xx = this.hero.x + this.hero.size + this.speedX;
                const yy = this.hero.y + this.hero.size;
                if(this.hitPointWithWallsArray(xx, yy - 2, wallsArray) === false) {
                    this.moveRight(canvasManager);
                }
            }
        }
    }

    moveY(wallsArray) {
        if(global().dialog) {
            if(this.w === true) {
                if(parseInt(this.speedY) === 0) {
                    if(this.canJUMP === true) {
                        this.speedY = -10;
                        this.canJUMP = false;
                    }
                }
            }

            this.speedY += this.gravity;
            
            let xx = undefined;
            let yy = undefined;
            let v = undefined;

            xx = this.hero.x
            yy = this.hero.y + this.hero.size;

            let flag = "FALSE";

            v = this.hitPointWithWallsArray(xx, yy, wallsArray);
            if(v !== false) {
                flag = v;
            }

            xx = this.hero.x + this.hero.size;
            yy = this.hero.y + this.hero.size;

            v = this.hitPointWithWallsArray(xx, yy, wallsArray);
            if(v !== false) {
                flag = v;
            }

            if(flag !== "FALSE") {
                const v = flag;
                this.hero.y = parseInt(v.y - this.hero.size);
                this.speedY = 0;
                this.canJUMP = true;
                return;
            }

            this.hero.y += this.speedY;
        }
    }

    getHero() {
        return this.hero;
    }

    setKeysFalse() {
        this.w = false;
        this.a = false;
        this.s = false;
        this.d = false;
    }

    addUpEvent() {
        window.onkeyup = (event) => {
            const key = event.keyCode;
            if(key === 87) this.w = false;
            if(key === 65) this.a = false;
            if(key === 83) this.s = false;
            if(key === 68) this.d = false;
        }
    }

    addDownEvent() {
        window.onkeydown = (event) => {
            const key = event.keyCode;
            if(key === 87) this.w = true;
            if(key === 65) this.a = true;
            if(key === 83) this.s = true;
            if(key === 68) this.d = true;
        }
    }
}
