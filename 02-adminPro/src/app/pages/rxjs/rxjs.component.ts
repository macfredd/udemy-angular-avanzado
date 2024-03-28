import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit, OnDestroy {

  myObservable$?: Subscription;
  
  constructor() {}

  ngOnInit(): void {
    // this.myObservable$ = 
    //   this.returnObersvable()
    //   .pipe(retry())
    //   .subscribe( value => console.log(value) );

    this.myObservable$ = this.returnInterval().subscribe( console.log );
  }

  ngOnDestroy(): void {
    if (this.myObservable$)
      this.myObservable$!.unsubscribe();
  }

  returnInterval(): Observable<number> {
    const interval$ = interval(100).pipe(
      take(10),
      filter( value => value % 2!== 0 ),
      map( value => { return value + 1; })
    );

    return interval$;
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
