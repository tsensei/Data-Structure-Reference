class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    if (!value || !priority) {
      return new Error("Value or Priority can't be empty");
    }

    const node = new Node(value, priority);
    let selfIndex = this.values.push(node) - 1;
    let parentIndex = Math.floor((selfIndex - 1) / 2);
    let temp;

    while (
      parentIndex >= 0 &&
      this.values[selfIndex].priority < this.values[parentIndex].priority
    ) {
      temp = this.values[selfIndex];
      this.values[selfIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      selfIndex = parentIndex;
      parentIndex = Math.floor((selfIndex - 1) / 2);
    }

    return this.values;
  }

  dequeue() {
    const node = this.values[0];
    const end = this.values.pop();

    if (!this.values.length) {
      return node ? node.value : undefined;
    }

    this.values[0] = end;

    let selfIndex = 0,
      lChildIndex = 1,
      rChildIndex = 2;

    while (true) {
      let swapIndex, temp;
      if (this.values[lChildIndex] && this.values[rChildIndex]) {
        if (
          this.values[lChildIndex].priority < this.values[rChildIndex].priority
        ) {
          swapIndex = lChildIndex;
        } else {
          swapIndex = rChildIndex;
        }
      } else if (this.values[lChildIndex]) {
        swapIndex = lChildIndex;
      } else {
        break;
      }

      if (this.values[swapIndex].priority < this.values[selfIndex].priority) {
        //swap
        temp = this.values[swapIndex];
        this.values[swapIndex] = this.values[selfIndex];
        this.values[selfIndex] = temp;

        selfIndex = swapIndex;
        lChildIndex = selfIndex * 2 + 1;
        rChildIndex = selfIndex * 2 + 2;
      } else {
        break;
      }
    }

    return node.value;
  }
}

const queue = new PriorityQueue();
