import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos2:Todo[] = [];//ekrana yazmak ıcın
  todos1:Todo[] = [];
 // constructor(private todoService:TodoService) { }
  constructor(private activateRoute:ActivatedRoute,private todoService:TodoService){

  }
   //activateRoute:O an istek atııgımız aktif dizini veriyor

  ngOnInit() {//ekrana basmak ıcın.todo service cagırdık
    this.todoService.getTodos().subscribe(res =>{
      this.todos1=res;
    });
    
   
    const data=this.activateRoute.snapshot.data['todoList'];//approuting de resolve-todoList
    console.log('data',data);
    this.todos2 = data;
    
  }

}
