// piece of data - val
// ref to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let prevNode = this.head;
    let currentNode = this.head;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = prevNode;
    this.tail.next = null;

    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentNode = this.head;
    this.head = this.head.next;

    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return currentNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this.head;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;

    while (index--) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    const newNode = new Node(val);

    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;

    prevNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);

    const removed = prevNode.next;

    prevNode.next = removed.next;

    this.length--;

    return removed;
  }

  reverse() {
    var temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    var current = temp;
    var prev = null;
    var next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  traverse() {
    var currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.val + "\n");
      currentNode = currentNode.next;
    }
  }
}

let list = new SinglyLinkedList();
