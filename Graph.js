class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return new Error("Vertex with same identifier already exists");
    }

    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return new Error("Invalid Vertex");
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (
      !this.adjacencyList[vertex1].includes(vertex2) ||
      !this.adjacencyList[vertex2].includes(vertex1)
    ) {
      return new Error("Invalid Vertex");
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => {
        return vertex !== vertex2;
      }
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => {
        return vertex !== vertex1;
      }
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return new Error("Invalid Vertex");
    }

    [...this.adjacencyList[vertex]].forEach((adjacenctVertex) => {
      this.removeEdge(vertex, adjacenctVertex);
    });

    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
