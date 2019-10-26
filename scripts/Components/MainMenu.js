import { h, Component } from 'preact';

class MainMenu extends Component {
    render(props, state) {
        return (
            <div className="page-menu">
                <div className="menu-box">
                    <a className="menu-btn" href="/game.html">Start</a>
                    <a className="menu-btn" href="/levels/">Levels</a>
                </div>
            </div>
        )
    }
}

export default MainMenu