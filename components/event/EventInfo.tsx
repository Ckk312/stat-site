// Name
// Logo
// Banner
// Start Date
// End Date
// Prize Pool
// Location
// IsFinished

import styles from "./EventInfo.module.css"
import Image from "next/image"
import favicon from "../../app/favicon.ico"

function EventInfo() {
    return (
        <div className={styles.eventInfo}>
            <div className={styles.eventLogo}>
                <Image
                    width={100}
                    height={100}
                    src={favicon}
                    alt="event logo"
                />
            </div>
            <span className={styles.eventName}>Event Name</span>
            <div className={styles.eventInfoData}>
                <div>
                    <span>Date</span>
                    <span>TBD</span>
                </div>
                <div>
                    <span>Location</span>
                    <span>TBD</span>
                </div>
                <div>
                    <span>Prize</span>
                    <span>TBD</span>
                </div>
                <div>
                    <span>Teams</span>
                    <span>TBD</span>
                </div>
            </div>
        </div>
    )
}

export default EventInfo;