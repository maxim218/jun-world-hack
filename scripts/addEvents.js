"use strict";

import getWallsArray from "./getWallsArray";

export default function addEvents(domElements, actionObjects) {
    console.log("Call addEvents");


    let intervalObj = setInterval(() => {
        actionObjects.heroControl.moveX(getWallsArray(), actionObjects.canvasManager);
        actionObjects.heroControl.moveY(getWallsArray());
        actionObjects.canvasManager.drawBackground();
        actionObjects.canvasManager.drawWallsArray(getWallsArray());
        actionObjects.canvasManager.drawHero(actionObjects.heroControl.getHero());
    }, 30);
}
