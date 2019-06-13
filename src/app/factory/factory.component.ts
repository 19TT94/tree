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

  addFactory(name, node, e) {
    this.tree.add(name, node);
    // clear input
    e.target.parentNode.children[0].value = '';
  }

  removeFactory(index, node) {
    this.tree.remove(index, node);
  }

  editStart(time) {
    this.tree.start(time, this.tree.root);
  }

  editEnd(time) {
    this.tree.end(time, this.node);
  }

  editLowerBound(lower) {
    this.lowerBound = lower;
  }

  editUpperBound(upper) {
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
