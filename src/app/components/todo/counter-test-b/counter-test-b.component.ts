import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterStateService } from 'src/app/services/counter-state.service';

@Component({
  selector: 'app-counter-test-b',
  templateUrl: './counter-test-b.component.html',
  styleUrls: ['./counter-test-b.component.scss']
})
export class CounterTestBComponent implements OnInit,OnDestroy {
  counter:number = 0;

  counterSubs:Subscription | undefined;
  constructor(private counterStateService:CounterStateService){
    // this.counterStateService.getCounter().subscribe(value => {
    //   this.counter = value;
    //  })

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
