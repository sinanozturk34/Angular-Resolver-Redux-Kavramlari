import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestAComponent } from './counter-test-a.component';

describe('CounterTestAComponent', () => {
  let component: CounterTestAComponent;
  let fixture: ComponentFixture<CounterTestAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterTestAComponent]
    });
    fixture = TestBed.createComponent(CounterTestAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
