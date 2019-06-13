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
    this.tree.lowerBound(lower, this.node)
  }

  editUpperBound(upper) {
    this.tree.upperBound(upper, this.node)
  }

  generateRandoms(count, node) {
    // reset Randoms
    node.rands = [];
    // limit number of random numbers to 15
    if(count < 15) {
      for(let i=0; i < count; i++) {
        // generate a random number
        console.log(node.lower);
        console.log(node.upper);
        let random = Math.floor(Math.random() * node.upper) + node.lower;
        node.rands.push(random);
      }
    }
  }
}
