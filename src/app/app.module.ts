import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { TodoComponent } from './components/todo/todo.component';
import { CounterTestAComponent } from './components/todo/counter-test-a/counter-test-a.component';
import { CounterTestBComponent } from './components/todo/counter-test-b/counter-test-b.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CounterTestAComponent,
    CounterTestBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
