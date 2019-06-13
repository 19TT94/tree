import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/** @defines interface for a single node */
export class Node {
  id: number;
  name: string;
  rands: Array<number>;

  constructor(index, name) {
    this.id = index;
    this.name = name;
    this.rands = [];
  }
}

/** @defines tree structure of nodes */
export class Tree {
  // array of nodes
  data: Array<Node>;
  // current node index
  index: number

  constructor() {
    this.data = [
      new Node(0, 'root')
    ];
    this.index = 0;
  }

  /** @returns array of nodes */
  getData() {
    return this.data;
  }

  /** @add node to tree */
  add(name) {
    // push node to tree
    this.data.push(new Node(this.index, name));
    // increment current not index
    this.index = this.index++;
  }

  /** @remove node from tree based on index */
  remove(index) {
    this.data.splice(index);
  }
}
