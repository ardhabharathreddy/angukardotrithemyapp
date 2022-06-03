import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() ptoc:any;
  @Output() b:EventEmitter<any>=new EventEmitter();
  num:any;
  send(){
    this.b.emit(this.num);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
