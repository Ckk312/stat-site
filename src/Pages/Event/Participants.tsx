import '../Styles/formatting.scss'

function Participants() {
    return (
        <div>
            <h4>Podium</h4>
            <table className="layout horiz c-horiz">
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Prize</th>
                        <th>Team</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </tbody>
            </table>
            <h4>Participating Teams</h4>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <h3></h3>
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Participants;