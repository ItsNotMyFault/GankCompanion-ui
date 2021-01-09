import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-gank-report',
  templateUrl: './gank-report.component.html',
  styleUrls: ['./gank-report.component.css']
})
export class GankReportComponent implements OnInit, OnChanges {
  partyId!: string;
  partyDuration!: string;
  partyStartTime!: string;
  playerCount!: string;
  killCount!: string;

  constructor(private activatedRoute: ActivatedRoute, private partyService: PartyService) {

  }
  async ngOnInit(): Promise<void> {
    this.UpdateGankReport();
  }

  async ngOnChanges(): Promise<void> {
    this.UpdateGankReport();
  }

  async UpdateGankReport(): Promise<void> {
    const fechtedPartyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.partyId = fechtedPartyId !== null ? fechtedPartyId : "0";
    console.log("partyId: " + this.partyId);
    const partyReport = await this.partyService.getPartyReportByPartyId(this.partyId);
    console.log("partyReport: " + partyReport);
    this.partyStartTime = partyReport.startTime;
    this.partyDuration = partyReport.duration;
    this.playerCount = partyReport.totalPlayers;
    this.killCount = partyReport.totalKills;
  }

}
