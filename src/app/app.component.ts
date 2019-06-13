import { Component } from '@angular/core';
import { Tree } from './tree.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Tree]
})

export class AppComponent {
  tree: Tree;

  constructor(private theTree: Tree) {
    this.tree = theTree;
  }

  addFirstFactory(name, e) {
    this.tree.add(name, this.tree.root);
    // clear input
    e.target.parentNode.children[0].value = '';
  }
}
