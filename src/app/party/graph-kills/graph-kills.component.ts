import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-kills',
  templateUrl: './graph-kills.component.html',
  styleUrls: ['./graph-kills.component.css']
})
export class GraphKillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var lineChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', '', '', ''],//same count as the data.
        datasets: [
          { data: [5, 2, 8, 2, 32, 12, 7, 1, 9], borderColor: '#3cb371' }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{ display: true }],
          yAxes: [{ display: true }]
        }
      }
    });

  }




}
