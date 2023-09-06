import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {

  counterTracker = new BehaviorSubject(0);
  constructor() { }

  //baslangıc degeri dondur.metotlar
  reset():void{
    this.counterTracker.next(0);
  }
  increase():void{//arttır
   this.counterTracker.next(this.counterTracker.value + 1);

  }
  decrase():void{//azaltma
  this.counterTracker.next(this.counterTracker.value -1);
  }
  //baska componentlerden de state degıskeni yakalabilsin diye observable tipinde tanımladım
  getCounter(){//degısken tanımladım
   return this.counterTracker.asObservable();
  }
}
