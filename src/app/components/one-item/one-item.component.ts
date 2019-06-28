import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-item',
  templateUrl: './one-item.component.html',
  styleUrls: ['./one-item.component.scss']
})
export class OneItemComponent implements OnInit {
  @Input() name:string;
  constructor() { }

  ngOnInit() {
    console.log('oninit one item')
    console.log(this.name)
  }

}
