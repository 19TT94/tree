import { Component } from '@angular/core';
import { Tree } from './tree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Tree]
})

export class AppComponent {
  constructor(private tree: Tree) { }

  ngOnInit() {
    this.tree.add("new");
  }
}
