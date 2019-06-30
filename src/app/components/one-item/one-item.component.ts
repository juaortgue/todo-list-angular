import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from 'src/app/interfaces/todo.interface';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {
  @Input() todo: TodoInterface;
  editUnlocked:boolean;
  visible:boolean;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.editUnlocked=false;
    this.visible = true;
    this.createForm();
  }

  public remove() {
    this.visible = false;
  }
  public edit() {
    console.log('editado')
    this.editUnlocked = true;
    this.form.controls.
    console.log(this.form.get('name').value)
    this.todo.name = this.form.get('name').value;
    console.log(this.todo.name)
  }//        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),

  createForm() {
    const newForm: FormGroup = this.fb.group({
      name: new FormControl({value:this.todo.name, disabled: true}, Validators.required)
    });
    this.form = newForm;

  }

}
