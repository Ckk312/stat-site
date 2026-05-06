import EventInfo from './EventInfo.tsx'
import EventMatchLists from './EventMatchLists.tsx'
import Participants from './Participants.tsx'

function Event() {
    return (
        <>
            <EventInfo />
            <EventMatchLists />
            <Participants />
        </>
    );
}

export default Event;