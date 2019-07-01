import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from 'src/app/interfaces/todo.interface';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-one-item-checked',
  templateUrl: './one-item-checked.component.html',
  styleUrls: ['./one-item-checked.component.scss']
})
export class OneItemCheckedComponent implements OnInit {

  @Input() todo: TodoInterface;
  visible: boolean;
  form: FormGroup;
  checked: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.visible = true;
    this.createForm();
  }

  public remove() {
    this.visible = false;
  }

  public save() {
    console.log('save')
    this.todo.name = this.form.get('name').value;
    this.form.get('name').disable();
  }

  public edit() {
    console.log('editado')
    this.form.get('name').enable();
  }
  public checkMe() {
    this.checked = true;
    console.log(this.checked)
  }

  createForm() {
    const newForm: FormGroup = this.fb.group({
      name: new FormControl({ value: this.todo.name, disabled: true }, Validators.required)
    });
    this.form = newForm;

  }

}
