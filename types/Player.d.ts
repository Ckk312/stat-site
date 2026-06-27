export interface Player {
    id: number;
    photo: string;
    name: string;
    previousNames: string[];
    team: Team;
    previousTeams: Team[];
    nationality: string;
}