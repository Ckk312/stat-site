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

function EventInfo() {
    return (
        <div className={styles.eventInfo}>
            <Image
                src=""
                alt=""
            />
            <div className={styles.eventInfoData}>
                <h2></h2>
            </div>
        </div>
    )
}

export default EventInfo;