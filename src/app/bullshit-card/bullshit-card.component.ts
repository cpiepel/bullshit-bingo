import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-bullshit-card',
  templateUrl: './bullshit-card.component.html'
})
export class BullshitCardComponent implements OnInit {

  constructor() { }

  @Input()
  public rowCols:number;



  ngOnInit() {
  }

  get rcArr() {
    return Array(this.rowCols).fill(4);
  }

  onClick(){
    console.log("onClick");
  }

}
