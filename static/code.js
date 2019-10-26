/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = global;


const GLOBAL = {
    dialog: true,
    tests: undefined,
    friend: undefined,
};

function global() {
    return GLOBAL;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getElement__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CanvasManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addEvents__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HeroControl__ = __webpack_require__(8);







window.onload = function() {
    console.log("Window load OK");

    const can = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("can");
    const rightBox = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("rightBox");
    const codeInputElement = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("codeInputElement");
    const dialogBox = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("dialogBox");
    const runCodeBtn = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("runCodeBtn");
    const controlDialogBtn = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("controlDialogBtn");
    const codeInputBox = Object(__WEBPACK_IMPORTED_MODULE_0__getElement__["a" /* default */])("codeInputBox");

    const domElements = {
        can,
        rightBox,
        codeInputElement,
        dialogBox,
        runCodeBtn,
        controlDialogBtn,
        codeInputBox,
    };

    const canvasManager = new __WEBPACK_IMPORTED_MODULE_1__CanvasManager__["a" /* default */](can);
    const heroControl = new __WEBPACK_IMPORTED_MODULE_3__HeroControl__["a" /* default */]();

    const actionObjects = {
        canvasManager,
        heroControl,
    };

    Object(__WEBPACK_IMPORTED_MODULE_2__addEvents__["a" /* default */])(domElements, actionObjects);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getElement;


function getElement(id) {
    console.log("Id: " + id);
    return document.getElementById(id);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class CanvasManager {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = CanvasManager;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWallsArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getTaskersArr__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runTest__ = __webpack_require__(7);







function addEvents(domElements, actionObjects) {
    console.log("Call addEvents");

    domElements.controlDialogBtn.onclick = function() {
        Object(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* default */])().dialog = !Object(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* default */])().dialog;
    };

    domElements.runCodeBtn.onclick = function() {
        if(Object(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* default */])().tests) {
            Object(__WEBPACK_IMPORTED_MODULE_3__runTest__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__global__["a" /* default */])().tests, domElements.codeInputElement);
        }
    };

    let intervalObj = setInterval(() => {
        actionObjects.heroControl.moveX(Object(__WEBPACK_IMPORTED_MODULE_0__getWallsArray__["a" /* default */])(), actionObjects.canvasManager);
        actionObjects.heroControl.moveY(Object(__WEBPACK_IMPORTED_MODULE_0__getWallsArray__["a" /* default */])());
        actionObjects.canvasManager.drawBackground();
        actionObjects.canvasManager.drawWallsArray(Object(__WEBPACK_IMPORTED_MODULE_0__getWallsArray__["a" /* default */])());
        const last = actionObjects.heroControl.getLast() + "";
        actionObjects.canvasManager.drawHero(actionObjects.heroControl.getHero(), last);
        actionObjects.canvasManager.drawTasksArray(Object(__WEBPACK_IMPORTED_MODULE_1__getTaskersArr__["a" /* default */])());
        actionObjects.heroControl.renderTask(Object(__WEBPACK_IMPORTED_MODULE_1__getTaskersArr__["a" /* default */])(), domElements.dialogBox, domElements.rightBox);
    }, 30);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWallsArray;


const arr = [];

function addWall(x, y, w, h) {
    arr.push({x, y, w, h});
}

addWall(100, 400, 150, 160);
addWall(500, 300, 150, 260);
addWall(950, 400, 150, 160);
addWall(-4000, 550, 8000, 100);

function getWallsArray() {
    return arr;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTaskersArr;


const arr = [];

function addToArr(x, y, text, testsArr) {
    const size = 90;
    const w = size;
    const h = size;
    arr.push({
        x, y, text, testsArr, size, w, h
    });
}

addToArr(690, 470, " Функция для расчета суммы чисел main(a, b) ", [
    {
        f: "main(2, 3)",
        r: 5,
    },
    {
        f: "main(12, 8)",
        r: 20,
    },
    {
        f: "main(-2, -3)",
        r: -5,
    }
]);

addToArr(-30, 470, " Функция для получения наибольшего из двух чисел main(a, b) ", [
    {
        f: "main(9, 3)",
        r: 9,
    },
    {
        f: "main(2, 7)",
        r: 7,
    },
    {
        f: "main(5, 5)",
        r: 5,
    }
]);

function getTaskersArr() {
    return arr;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runTest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);




function runTest(tests) {
    const code = codeInputElement.value + "";

    if(tests) {
        let GOOD = true;

        tests.forEach((test) => {
            try {
                const result = eval(code + "  " + test.f);
                if(result !== test.r) GOOD = false;
                console.log(result + "_____" + test.r);
            } catch (err) {
                GOOD = false;
            }
        });

        if(GOOD === true) {
            Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().dialog = true;
            Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().friend.y = 1000;
        }
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);




class HeroControl {
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
                Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().tests = task.testsArr;
                Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().friend = task;
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
        if(Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().dialog) {
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
        if(Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])().dialog) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = HeroControl;



/***/ })
/******/ ]);