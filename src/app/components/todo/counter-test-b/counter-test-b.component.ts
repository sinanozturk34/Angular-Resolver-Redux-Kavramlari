import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterStateService } from 'src/app/services/counter-state.service';

@Component({
  selector: 'app-counter-test-b',
  templateUrl: './counter-test-b.component.html',
  styleUrls: ['./counter-test-b.component.scss']
})
export class CounterTestBComponent implements OnInit,OnDestroy {
  counter:number = 0;
  counter2:number =0;
  counterSubs:Subscription | undefined;
  count$:Observable<number>;

  constructor(private counterStateService:CounterStateService, private store: Store<{ count: number }>){
    // this.counterStateService.getCounter().subscribe(value => {
    //   this.counter = value;
    //  })
    this.count$ = store.select('count');
    this.count$.subscribe(counter => {
      this.counter2 = counter;
    })


  }
  ngOnDestroy(): void {
    this.counterSubs?.unsubscribe(); 
  }
  
  ngOnInit(): void {
     this.counterSubs = this.counterStateService.getCounter().subscribe(value => {
    this.counter = value;
   })
  }

}
