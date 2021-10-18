class Team {
    name: string;
    membersList: User[];
    points: number;

    constructor(name: string, members: User[]){
        this.name = name;
        this.membersList = members;
        this.points = 0;
    }
}