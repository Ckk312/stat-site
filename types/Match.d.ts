export interface Match {
    id: number;
    setId: number;
    startDateTime: Date;
    endDateTime: Date;
    matchTime: number;
    stage: string;
    mode: string;
    statlines: Statline[];
    isFinished: boolean;
}