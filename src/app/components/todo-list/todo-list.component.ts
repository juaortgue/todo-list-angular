import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/interfaces/todo.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoInterface[];
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllTodos();
    this.createForm();
  }
  createForm() {
    const newForm: FormGroup = this.fb.group ({
      name: ["", Validators.required]   
    });
    this.form = newForm;
  
}

  public addTodo() {

  }
  public removeTodo() {

  }
  public updateTodo() {

  }
  public getAllTodos() {
    this.todoList = [
      {
        id: "1",
        name: "Go to the cinema"
      },
      {
        id: "2",
        name: "Buy a car"
      }
    ];
  }

}
