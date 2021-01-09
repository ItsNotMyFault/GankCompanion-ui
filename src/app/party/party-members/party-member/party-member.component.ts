import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PartyMember } from '../party-member.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-party-member',
  templateUrl: './party-member.component.html',
  styleUrls: ['./party-member.component.css']
})
export class PartyMemberComponent implements OnInit, OnChanges {
  @Input() partyMember!: PartyMember;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("partyMember component", this.partyMember);
  }

}
