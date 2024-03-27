import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit, OnDestroy {

  myObservable$?: any;
  
  constructor() {}

  ngOnInit(): void {
    this.myObservable$ = 
      this.returnObersvable()
      .pipe(retry())
      .subscribe( value => console.log(value) );
  }

  ngOnDestroy(): void {
    this.myObservable$!.unsubscribe();
  }

  returnObersvable(): Observable<string> {

    let i: number = 0;
    let numFails = 1;

    const observable$ = new Observable<string>( observer => {
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
    });

    return observable$;
  }
}
