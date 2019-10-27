import { h, Component } from 'preact';

class MainMenu extends Component {
    render(props, state) {
        return (
            <div>
                <div className="page-menu">
                    <div className="header-box">
                        <img className="img-header" src="krot2.png"/>
                    </div>
                    <div className="menu-box">
                        <div align="center" className="projName"><img src="https://x-lines.ru/letters/i/cyrillictechno/0025/ffffff/60/0/jj4shi5xqjsge.png"/></div>
                        <a className="menu-btn" href="/game.html">Start</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu