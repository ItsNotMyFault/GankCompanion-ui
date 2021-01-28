import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('searchByName') playerNameInput!: ElementRef;
  playerName!: string;
  constructor() { }

  SetPlayerNameForPartyList(){
    this.playerName = this.playerNameInput.nativeElement.value;
    console.log("playerName typed:", this.playerName);
  }

  ngOnInit(): void {
  }

}
