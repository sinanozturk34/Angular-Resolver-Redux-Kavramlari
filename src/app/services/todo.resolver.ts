import {Injectable} from '@angular/core';
import { //tüm todo.resolve.ts kodlarını biz yazdık.Otomatik gelmedi
Router, Resolve,
RouterStateSnapshot,
ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo[]> {
  constructor(private todoService:TodoService){
   
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Todo[]> {
  
    console.log('todo-resolver',route,state);

    return this.todoService.getTodos();
  }
  
}