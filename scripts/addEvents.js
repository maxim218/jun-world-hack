"use strict";

import getWallsArray from "./getWallsArray";
import getTaskersArr from "./getTaskersArr";

export default function addEvents(domElements, actionObjects) {
    console.log("Call addEvents");


    let intervalObj = setInterval(() => {
        actionObjects.heroControl.moveX(getWallsArray(), actionObjects.canvasManager);
        actionObjects.heroControl.moveY(getWallsArray());
        actionObjects.canvasManager.drawBackground();
        actionObjects.canvasManager.drawWallsArray(getWallsArray());
        actionObjects.canvasManager.drawHero(actionObjects.heroControl.getHero());
        actionObjects.canvasManager.drawTasksArray(getTaskersArr());
        actionObjects.heroControl.renderTask(getTaskersArr(), domElements.dialogBox);
    }, 30);
}
