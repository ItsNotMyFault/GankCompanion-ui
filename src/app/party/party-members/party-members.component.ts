import { Component, OnInit } from '@angular/core';
import { PartyMember } from './party-member.model';

@Component({
  selector: 'app-party-members',
  templateUrl: './party-members.component.html',
  styleUrls: ['./party-members.component.css']
})
export class PartyMembersComponent implements OnInit {

  partyMembers: PartyMember[] = [];

  constructor() { 
    //with a service fetch partyMembers...
  }

  ngOnInit(): void {
  }

}
