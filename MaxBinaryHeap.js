class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    if (!value) {
      throw new Error("Value can't be empty");
    }

    let childIndex = this.values.push(value) - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let temp;

    // Loop for swapping if child is greater than parent
    // while parent is in bound
    while (
      parentIndex >= 0 &&
      this.values[childIndex] > this.values[parentIndex]
    ) {
      temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;

      // parent is the new child as swapped
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    // Edge case if only one node in heap
    if (!this.values.length) {
      return max;
    }
    this.values[0] = end;

    let parentIndex = 0,
      lChildIndex = 1,
      rChildIndex = 2;

    while (true) {
      let swapIndex, temp;
      if (this.values[lChildIndex] && this.values[rChildIndex]) {
        if (this.values[lChildIndex] > this.values[rChildIndex]) {
          swapIndex = lChildIndex;
        } else {
          swapIndex = rChildIndex;
        }
      } else if (this.values[lChildIndex]) {
        swapIndex = lChildIndex;
      } else {
        break;
      }

      if (this.values[swapIndex] > this.values[parentIndex]) {
        temp = this.values[swapIndex];
        this.values[swapIndex] = this.values[parentIndex];
        this.values[parentIndex] = temp;

        parentIndex = swapIndex;
        lChildIndex = parentIndex * 2 + 1;
        rChildIndex = parentIndex * 2 + 2;
      } else {
        break;
      }
    }

    return max;
  }
}

let heap = new BinaryHeap();
