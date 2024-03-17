import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent {

  @Input() progress: number = 50;

  @Input() clase: string = 'bg-primary';

  @Output() valorDeSalida: EventEmitter<number> = new EventEmitter();


  changePercentage(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
    } else if (this.progress <= 0 && value < 0) {
      this.progress = 0;
    } else {
      this.progress += value;
    }

    this.valorDeSalida.emit(this.progress);
  }
}
