import type { Team } from "./Team"

export interface Event {
    id: number;
    name: string;
    logo: string;
    banner: string;
    startDate: Date;
    endDate: Date;
    prizePool: number;
    location: string;
    teams: Team[];
    placements: number[];
    bracketStages: string[];
    bracketLink: string;
    sets: Set[];
    isFinished: boolean;
}