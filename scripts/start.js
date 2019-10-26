"use strict";

import getElement from "./getElement";
import CanvasManager from "./CanvasManager";
import addEvents from "./addEvents";
import HeroControl from "./HeroControl";

window.onload = function() {
    console.log("Window load OK");

    const can = getElement("can");
    const rightBox = getElement("rightBox");
    const codeInputElement = getElement("codeInputElement");
    const dialogBox = getElement("dialogBox");
    const runCodeBtn = getElement("runCodeBtn");
    const controlDialogBtn = getElement("controlDialogBtn");
    const codeInputBox = getElement("codeInputBox");

    const domElements = {
        can,
        rightBox,
        codeInputElement,
        codeInputElement,
        dialogBox,
        runCodeBtn,
        controlDialogBtn,
        codeInputBox,
    };

    const canvasManager = new CanvasManager(can);
    const heroControl = new HeroControl();

    const actionObjects = {
        canvasManager,
        heroControl,
    };

    addEvents(domElements, actionObjects);
}
