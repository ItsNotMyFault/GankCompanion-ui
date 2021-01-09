import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PartyInstance } from './party-instance.model';

@Component({
  selector: 'app-party-instance',
  templateUrl: './party-instance.component.html',
  styleUrls: ['./party-instance.component.css']
})
export class PartyInstanceComponent implements OnInit, OnChanges {

  @Input() partyInstance!: PartyInstance;

  constructor(private router: Router) { }

  NavigateToParty(partyId: string) {
    console.log("navigate!!!");
    this.router.navigate(['party/' + partyId]);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }

}
