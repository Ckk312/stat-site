import '../Styles/formatting.scss'
import './topbar.scss'

function TopBar() {
    return (
        <div id="top-bar-box">
            <div id="top-bar-content" className="layout horiz">
                <a href="">
                    <img src=""/>
                </a>
                <div className="layout horiz">
                    <h4>Matches</h4>
                    <h4>Events</h4>
                    <h4>Spoilers Toggle</h4>
                    <h4>Log In</h4>
                </div>
            </div>
        </div>
    )
}

export default TopBar;