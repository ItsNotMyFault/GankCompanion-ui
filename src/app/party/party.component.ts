import { OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyMember } from './party-members/party-member.model';
import { PartyService } from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit, OnChanges {

  partyId: string | null;
  totalLoot: number;

  // totalLootResult = 0;
  constructor(private activatedRoute: ActivatedRoute, partyService: PartyService) {
    this.partyId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.partyId);
    this.totalLoot = 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  // SetEstimatedLoot() {
  //   this.totalLootResult = this.totalLoot.nativeElement.value;
  // }

  ngOnInit(): void {
  }

}
