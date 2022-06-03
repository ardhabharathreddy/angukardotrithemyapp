import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  num:any;
  b:any;
  catch(value:any){
    this.num=value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
