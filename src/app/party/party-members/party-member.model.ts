export class PartyMember {
    public name: string;
    public joinedTime: string;
    public timeInParty: string;
    public lootSharePercent: string;
    public lootShareSilver: string;

    constructor(name: string, joinedTime: string, timeInParty: string, lootSharePercent: string, lootShareSilver: string) {
        this.name = name;
        this.joinedTime = joinedTime;
        this.timeInParty = timeInParty;
        this.lootSharePercent = lootSharePercent;
        this.lootShareSilver = lootShareSilver;
    }
}
