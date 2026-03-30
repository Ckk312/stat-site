import MapData from './MapData.tsx'
import MatchInfo from './MatchInfo.tsx'
import MatchTable from './MatchTable.tsx'

function Match() {
    return (
        <div>
            <MatchInfo />
            <MapData />
            <MatchTable />
        </div>
    );
}

export default Match;