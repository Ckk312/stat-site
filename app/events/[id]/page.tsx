import EventInfo from "../../../components/event/EventInfo"
import EventMatchLists from "../../../components/event/EventMatchLists"
import Participants from "../../../components/event/Participants"

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