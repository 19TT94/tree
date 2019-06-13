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

  addFactory(name, node) {
    this.tree.add(name, node);
  }

  removeFactory(index, node) {
    this.tree.remove(index, node);
  }
}
