import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/** @defines interface for a single node */
export class Node {
  id: number;
  parent: Node;
  name: string;
  rands: Array<number>;
  children: Array<Node>;
  timestamp: Object;

  constructor(index, parent, name) {
    this.id = index;
    this.parent = parent;
    this.name = name;
    this.rands = [];
    this.children = [];
    this.timestamp = new Date();
  }
}

/** @defines tree structure of nodes */
export class Tree {
  // initial index
  index: number;
  // initial node in tree
  root: Node;

  constructor() {
    this.index = 0;
    this.root = new Node(this.index, null, 'root');
  }

  /** @add node to tree */
  add(name, parent) {
      // if root node
    if(parent === null) {
      parent = this.root;
    }
    // push node to tree
    this.root.children.push(new Node(this.index++, parent, name))

  }

  /** @remove node from tree based on index */
  remove(node, start) {
    // if start node is null start at the root
    if(start === null) {
      start = this.root;
    }

    for(let i = 0; i < start.children.length; i++) {
      // remove node if there is a match
      if(start.children[i] === node) {
        start.children.splice(i);
      } else {
        // recursive check on children
        this.remove(node, start.children[i])
      }
    }
  }
}
