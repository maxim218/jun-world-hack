import MainMenu from "./Components/MainMenu";
import {h, render} from "preact";
import Router from "preact-router";
import Levels from "./Components/Levels";

render(<Router>
    <MainMenu path="/"/>
    <Levels path="/levels/"/>
</Router>, document.getElementById("content"));