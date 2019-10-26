import { h, Component } from 'preact';

class Levels extends Component {
    render(props, state) {
        return (
            <div className="page-levels">
                <a href="/">Назад</a>
                <div className="levels-box">
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                    <div className="level-card">
                        <img src="/"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Levels