"use strict";

import getWallsArray from "./getWallsArray";
import getTaskersArr from "./getTaskersArr";
import global from "./global";

export default function addEvents(domElements, actionObjects) {
    console.log("Call addEvents");

    domElements.controlDialogBtn.onclick = function() {
        global().dialog = !global().dialog;
    };


    let intervalObj = setInterval(() => {
        actionObjects.heroControl.moveX(getWallsArray(), actionObjects.canvasManager);
        actionObjects.heroControl.moveY(getWallsArray());
        actionObjects.canvasManager.drawBackground();
        actionObjects.canvasManager.drawWallsArray(getWallsArray());
        actionObjects.canvasManager.drawHero(actionObjects.heroControl.getHero());
        actionObjects.canvasManager.drawTasksArray(getTaskersArr());
        actionObjects.heroControl.renderTask(getTaskersArr(), domElements.dialogBox, domElements.controlDialogBtn);
    }, 30);
}
