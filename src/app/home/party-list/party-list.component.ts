import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PartyService } from 'src/app/party/party.service';
import { PartyInstance } from './party-instance/party-instance.model';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html'
})
export class PartyListComponent implements OnInit, OnChanges {

  @Input() playerName!: string;
  parties!: PartyInstance[];

  constructor(private partyService: PartyService) {
    this.parties = [];
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (this.playerName !== undefined && this.playerName.length > 2) {
      const someParties = await this.partyService.getPartiesByPlayerName(this.playerName);
      this.parties = someParties.partyMembersResponse;
      console.log("getPartiesByPlayerName", this.parties);
    }
  }

  async ngOnInit(): Promise<void> {
    const someParties = await this.partyService.getMostRecentParties();
    this.parties = someParties.partyMembersResponse;
    console.log("getMostRecentParties", this.parties);
  }

}
