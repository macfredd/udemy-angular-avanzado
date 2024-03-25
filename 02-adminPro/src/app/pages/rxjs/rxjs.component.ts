import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  

  constructor() {
    let i: number = 0;
    let numFails: number = 1;

    const observable$ = new Observable( observer => {
      const interval = setInterval( () => {
        observer.next('Ping:' + (i++) + ' numFails:' + numFails);

        if (numFails < 2 && i === 2) {
          clearInterval(interval);
          observer.error('Error');
          ++numFails;
        }
        
        if (i === 10) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000 );
    })
    .pipe(
      retry()
    )
    .subscribe( value => console.log(value) );
  }
}
