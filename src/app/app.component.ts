import { Component } from '@angular/core';
import { Tree } from './tree.service';

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

  addFirstFactory(name) {
    this.tree.add(name, this.tree.root);
  }
}
