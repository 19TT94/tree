import { Component, OnInit, Input } from '@angular/core';
import { Tree } from '../tree.service';


@Component({
  selector: 'factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
  providers: [Tree]
})

export class FactoryComponent {
  @Input() tree: Tree;
  @Input() node: Node;

  lowerBound: number;
  upperBound: number;

  constructor() {
    this.lowerBound = 0;
    this.upperBound = 100;
  }

  /** @add factory from name */
  addFactory(name, node, e) {
    this.tree.add(name, node);
    // clear input
    e.target.parentNode.children[0].value = '';
  }

  /** @add factory based on node */
  removeFactory(node) {
    this.tree.remove(node);
  }

  /** @edit name functions */
  toggleName: boolean = false;

  editName() {
    this.toggleName = true;
  }

  saveName(name, node) {
    this.tree.name(name, node);
    this.toggleName = false;
  }

  /** @edit start/end functions */
  toggleStart: boolean = false;

  editStart() {
    this.toggleStart = true;
  }

  saveStart(time, node) {
    this.tree.start(time, node);
    this.toggleStart = false;
  }

  toggleEnd: boolean = false;

  editEnd() {
    this.toggleEnd = true;
  }

  saveEnd(time, node) {
    this.tree.end(time, node);
    this.toggleEnd = false;
  }

  /** @edit bounds */
  editLowerBound(lower) {
    this.lowerBound = lower;
  }

  editUpperBound(upper) {
    console.log(upper);
    this.upperBound = upper;
  }

  generateRandoms(count, node, e) {
    // reset Randoms
    node.children = [];
    // limit number of random numbers to 15
    if(count < 15) {
      for(let i=0; i < count; i++) {
        // generate a random number
        let random = Math.floor(Math.random() * this.upperBound) + this.lowerBound;
        this.addFactory(random, node, e);
      }
    }
  }

  removeAllFactories(node) {
    this.tree.removeAll(node)
  }
}
