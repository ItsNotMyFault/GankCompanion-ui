export class PartyInstance {
    public createdDate: string;
    public players: string;
    public duration: string;
    public isActive: boolean;
    public partyFirebaseId: string;

    constructor(createdDate: string, players: string, duration: string, isActive: boolean, partyFirebaseId: string) {
        this.createdDate = createdDate;
        this.players = players;
        this.duration = duration;
        this.isActive = isActive;
        this.partyFirebaseId = partyFirebaseId;
    }
}
