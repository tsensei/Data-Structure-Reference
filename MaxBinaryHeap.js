class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let childIndex = this.values.push(value) - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      this.values[parentIndex] < this.values[childIndex] &&
      parentIndex >= 0
    ) {
      // Swap parent and child value
      var temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[childIndex];
      this.values[childIndex] = temp;

      // Make parentIndex the new childIndex

      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    const max = this.values[0];
    this.values[0] = this.values.pop();

    let parentIndex = 0;
    let lChildIndex = parentIndex * 2 + 1;
    let rChildIndex = parentIndex * 2 + 2;
    let swapIndex, temp;

    while (
      this.values[parentIndex] < this.values[lChildIndex] ||
      this.values[parentIndex] < this.values[rChildIndex]
    ) {
      if (this.values[lChildIndex] > this.values[rChildIndex]) {
        swapIndex = lChildIndex;
      } else {
        swapIndex = rChildIndex;
      }

      //Swap
      temp = this.values[swapIndex];
      this.values[swapIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      parentIndex = swapIndex;
      lChildIndex = parentIndex * 2 + 1;
      rChildIndex = parentIndex * 2 + 2;
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();
