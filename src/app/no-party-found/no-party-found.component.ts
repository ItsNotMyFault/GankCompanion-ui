import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-no-party-found',
    templateUrl: './no-party-found.component.html'
})
export class NoPartyFoundComponent {
    constructor(private router: Router) { }

    NavigateToHomePage() {
      console.log("navigate!!!");
      this.router.navigate(['home']);
    }

}
