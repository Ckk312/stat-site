function MatchInfo() {
    return (
        <div>
            <div id="match-info-box">
                <div id="match-info-tags" className="layout horiz">
                    <div className="layout horiz">
                        <img src="" />
                        <a href="" >Tournament Name</a>
                        <p> {">"} Stage: Round</p>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>Time</p>
                    </div>
                </div>
                <h2>Status</h2>
                <div className="layout horiz c-horiz">
                    <div className="team-info">
                        <img src="" />
                        <h3>Team Name</h3>
                        <h2>0</h2>
                    </div>
                    <h1 className="layout horiz c-vert">VS</h1>
                    <div className="team-info">
                        <img src="" />
                        <h3>Team Name</h3>
                        <h2>0</h2>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchInfo;