import { Component, OnInit } from '@angular/core';
import { PartyMember } from './party-members/party-member.model';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
