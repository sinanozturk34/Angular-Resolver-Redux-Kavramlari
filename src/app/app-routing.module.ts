import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoResolver } from './services/todo.resolver';

const routes: Routes = [{
  path:'todo',
  component:TodoComponent,
  resolve:{
    todoList: TodoResolver
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
