export interface Set {
    id: number;
    eventId: number;
    startDateTime: Date;
    endDateTime: Date;
    teams: Team[];
    setScore: number[];
    matches: Match[];
    isFinished: boolean;
}