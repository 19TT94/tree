import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {
  id: number;
  name: string;
  rands: Array<number>;
  children: Array<number>;

  constructor() {
    this.id = 0;
    this.name = 'Root';
    this.rands = [];
    this.children = [];
  }

  ngOnInit() {

  }

}
