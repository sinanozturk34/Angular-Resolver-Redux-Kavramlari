import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterStateService } from 'src/app/services/counter-state.service';
import { decrement, increment, reset } from 'src/app/store/counter/counter.action';

@Component({
  selector: 'app-counter-test-a',
  templateUrl: './counter-test-a.component.html',
  styleUrls: ['./counter-test-a.component.scss']
})
export class CounterTestAComponent implements OnInit {

  count$: Observable<number>;

  constructor(private counterStateService: CounterStateService, private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {

  }
  increase() {//arttrıma metodu calısır
    this.counterStateService.increase();//tetikledik
  }
  decrease() {
    this.counterStateService.decrase();
  }
  reset() {
    this.counterStateService.reset();
  }
  // ******************************************
  increaseRx() {//arttrıma metodu calısır
    this.store.dispatch(increment())
    // this.counterStateService.increase();//tetikledik
  }
  decreaseRx() {
    // this.counterStateService.decrase();
    this.store.dispatch(decrement())

  }
  resetRx() {
    // this.counterStateService.reset();
    this.store.dispatch(reset());
  }

}
