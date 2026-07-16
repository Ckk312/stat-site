import styles from "./page.module.css";
import Link from "next/link";

export default function Events() {
    return (
        <div className={styles.eventsLayout}>
            {/*<Link href="/events/1">click here for individual event page test</Link>*/}
            <div className={styles.eventsButtons}>
                <button>Ongoing & Upcoming</button>
                <button>Finished</button>
                <span>Filters</span>
                <div className={styles.eventsFilters}>
                    Test
                </div>
            </div>
            <div className={styles.eventsList}>
                <span>Ongoing Events</span>
                <Link className={styles.eventCard} href="/events/1">
                    Placeholder Event 1
                </Link>
            </div>
        </div>
    )
}