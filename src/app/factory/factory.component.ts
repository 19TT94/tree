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

  lower: number;
  upper: number;

  constructor() {
    this.lower = 0;
    this.upper = 100;
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
    this.lower = lower;
  }

  editUpperBound(upper) {
    this.upper = upper;
  }

  generateRandoms(count, node, e) {
    // reset Randoms
    node.children = [];
    // limit number of random numbers to 15
    if(count < 15) {
      for(let i=0; i < count; i++) {
        // generate a random number
        let random = Math.floor(Math.random() * node.upper) + node.lower;
        this.addFactory(random, node, e);
      }
    }
  }

  removeAllFactories(node) {
    this.tree.removeAll(node)
  }
}
