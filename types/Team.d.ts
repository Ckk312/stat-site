export interface Team {
    id: number;
    logo: string;
    name: string;
    activeMembers: Player[];
    formerMembers: Player[];
    dateFormed: Date;
    dateDisbanded: Date;
}