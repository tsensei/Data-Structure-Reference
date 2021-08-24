class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const targetNode = this.tail;
    const newTail = targetNode.prev;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
      targetNode.prev = null;
    }

    this.length--;
    return targetNode;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = null;

    if (index <= this.length / 2) {
      current = this.head;
      while (index--) {
        current = current.next;
      }
    } else {
      index = this.length - index - 1;
      current = this.tail;
      while (index--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, val) {
    const targetNode = this.get(index);

    if (!targetNode) {
      return false;
    }

    targetNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    const prevNode = this.get(index - 1);

    const currentNode = new Node(val);

    const nextNode = prevNode.next;

    currentNode.prev = prevNode;
    currentNode.next = nextNode;

    prevNode.next = currentNode;
    nextNode.prev = currentNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const currentNode = this.get(index);

    const prevNode = currentNode.prev;
    const nextNode = currentNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    currentNode.prev = null;
    currentNode.next = null;

    this.length--;

    return currentNode;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.val + " ");
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
