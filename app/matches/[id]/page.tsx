import MapData from '../../../components/match/MapData'
import MatchInfo from '../../../components/match/MatchInfo'
import MatchTable from '../../../components/match/MatchTable'

function Match() {
    return (
        <div>
            <MatchInfo />
            <MapData />
            <div className="layout vert c-horiz">
                <MatchTable />
                <MatchTable />
            </div>
        </div>
    );
}

export default Match;