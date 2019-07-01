import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { OneItemComponent } from './components/one-item/one-item.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OneItemCheckedComponent } from './components/one-item-checked/one-item-checked.component';
import { TodoListCheckedComponent } from './components/todo-list-checked/todo-list-checked.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    OneItemComponent,
    OneItemCheckedComponent,
    TodoListCheckedComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
