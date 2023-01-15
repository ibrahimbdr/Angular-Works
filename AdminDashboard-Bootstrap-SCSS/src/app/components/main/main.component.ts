import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  myChart: any;
  myChart2:any;

  constructor() { }

  ngOnInit(): void {
    this.myChart = new Chart("myChart",{type: 'doughnut',data : {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 100, 200],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    }})
    this.myChart2 = new Chart("myChart2",{type: 'line',data : {
      labels: ["HP","Dell","Huwawi","Toshipa","HP"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
    }})
  }

}
