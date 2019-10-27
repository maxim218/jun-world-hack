"use strict";

import getWallsArray from "./getWallsArray";
import getTaskersArr from "./getTaskersArr";
import global from "./global";
import runTest from "./runTest";

export default function addEvents(domElements, actionObjects) {
    console.log("Call addEvents");

    domElements.controlDialogBtn.onclick = function() {
        global().dialog = !global().dialog;
    };

    domElements.runCodeBtn.onclick = function() {
        if(global().tests) {
            runTest(global().tests, domElements.codeInputElement);
        }
    };

    let intervalObj = setInterval(() => {
        actionObjects.heroControl.moveX(getWallsArray(), actionObjects.canvasManager);
        actionObjects.heroControl.moveY(getWallsArray());
        actionObjects.canvasManager.drawBackground();
        actionObjects.canvasManager.drawWallsArray(getWallsArray());
        const last = actionObjects.heroControl.getLast() + "";
        actionObjects.canvasManager.drawHero(actionObjects.heroControl.getHero(), last);
        actionObjects.canvasManager.drawTasksArray(getTaskersArr());
        actionObjects.heroControl.renderTask(getTaskersArr(), domElements.dialogBox, domElements.rightBox);
        const tasksArr = getTaskersArr();
        const wallsArr = getWallsArray();
        console.log(tasksArr.length + " _____" + wallsArr.length);
        if(tasksArr[0].y > 900) wallsArr[0].y = 700;
    }, 30);
}
