import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoInterface } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {
  @Input() todo: TodoInterface;
  visible:boolean;
  constructor() { }

  ngOnInit() {
    this.visible = true;
  }

  public remove() {
    this.visible = false;
  }

}
