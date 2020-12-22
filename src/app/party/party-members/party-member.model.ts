export class PartyMember {
    public name: string;
    public joinedTime: string;
    public timeInParty: string;
    public lootSharePercent: number;
    public lootShareSilver: number;

    constructor(name: string, joinedTime: string, timeInParty: string, lootSharePercent: number, lootShareSilver: number) {
        this.name = name;
        this.joinedTime = joinedTime;
        this.timeInParty = timeInParty;
        this.lootSharePercent = lootSharePercent;
        this.lootShareSilver = lootShareSilver;
    }
}
