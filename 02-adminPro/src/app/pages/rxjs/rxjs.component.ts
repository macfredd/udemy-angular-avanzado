import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  
  constructor() {
    const observable$ = new Observable( observer => {
      const interval = setInterval( () => {
        observer.next('Ping');
      }, 1000 );
    }).subscribe( value => console.log(value) );
  }

}
