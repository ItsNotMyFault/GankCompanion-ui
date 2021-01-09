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
    const someParties = await this.partyService.getPartiesByPlayerName(this.playerName);
    this.parties = someParties.partyMembersResponse;
    console.log("getPartiesByPlayerName", this.parties);
  }

  ngOnInit(): void {

  }

}
