import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
})
export class PromisesComponent implements OnInit{
  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Success in promise');
    } else {
      reject('Error in promise');
    }
  
    }).then((msg) => {
      console.log(msg); 
    }).catch((msg) => {
      console.log(msg);
    }).finally(() => {
      console.log('Finally');
    });

    
    console.log('fin del init');
  }

  
}
