import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  @ViewChild('searchByName') playerNameInput!: ElementRef;
  playerName!: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerName = this.playerNameInput.nativeElement.value;
    console.log("playerName:", this.playerName);
  }
  test(){
    this.playerName = this.playerNameInput.nativeElement.value;
    console.log("playerName:", this.playerName);
  }

  ngOnInit(): void {
  }

}
