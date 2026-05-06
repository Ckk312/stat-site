import MapData from './MapData.tsx'
import MatchInfo from './MatchInfo.tsx'
import MatchTable from './MatchTable.tsx'
import '../Styles/formatting.scss'

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