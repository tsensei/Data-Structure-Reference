class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevNode = this.first;
      this.first = newNode;
      this.first.next = prevNode;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;

    return temp.value;
  }
}

const stack = new Stack();
