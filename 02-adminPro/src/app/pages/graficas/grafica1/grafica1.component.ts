
import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component implements OnInit {
  

  @Input() public title: string = 'Graph Title'

  @Input() public dataArray: number[] = [1,20,30];

  // Doughnut
  @Input() public lables: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];
  public doughnutChartData?: ChartData<'doughnut'>; 

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.lables,
      datasets: [
        { data : this.dataArray},
      ],
    };
  }

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}