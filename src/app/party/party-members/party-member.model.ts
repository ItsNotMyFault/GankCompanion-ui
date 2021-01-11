export class PartyMember {
    public playerName: string;
    public joinedTime: string;
    public timeInParty: number;
    public percentTimeInParty: number;
    public lootShareSilver: number;
    public playerIsInParty: boolean;

    constructor(playerName: string, joinedTime: string, timeInParty: number, percentTimeInParty: number, LootShareSilver: number, playerIsInParty: boolean) {
        this.playerName = playerName;
        this.joinedTime = joinedTime;
        this.timeInParty = timeInParty;
        this.percentTimeInParty = percentTimeInParty;
        this.lootShareSilver = LootShareSilver;
        this.playerIsInParty = playerIsInParty;
    }
}
