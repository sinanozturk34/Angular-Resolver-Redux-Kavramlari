import { Component, OnInit } from '@angular/core';
import { CounterStateService } from 'src/app/services/counter-state.service';

@Component({
  selector: 'app-counter-test-a',
  templateUrl: './counter-test-a.component.html',
  styleUrls: ['./counter-test-a.component.scss']
})
export class CounterTestAComponent implements OnInit {

  constructor(private counterStateService: CounterStateService) { }

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

}
