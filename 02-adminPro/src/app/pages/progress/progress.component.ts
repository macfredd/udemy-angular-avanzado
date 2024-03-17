import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  progress_1: number = 50;
  progress_2: number = 20;

  get Percentage_1() {
    return `${this.progress_1}%`;
  }

  get Percentage_2() {
    return `${this.progress_2}%`;
  }

  cambioValorHijo(event: number) {
    this.progress_1 = event;
  }
}
