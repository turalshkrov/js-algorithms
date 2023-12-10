class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  insertLast(data) {
    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size += 1;
  }

  insertAtIndex(index, data) {
    let node = new Node(data);
    if (index >= this.size || index < 0) {
      return
    } else {
      let current = this.head;
      let currentIndex = 0;
      let previus;
      while (currentIndex < index) {
        previus = current;
        current = current.next;
        currentIndex += 1;
      }
      node.next = current;
      previus.next = node;
      this.size += 1;
    }
  }

  remoweFromIndex(index) {
    if (index >= this.size || index < 0) {
      return
    } else {
      let current = this.head;
      let currentIndex = 0;
      let previus;
      while (currentIndex < index) {
        previus = current;
        current = current.next;
        currentIndex += 1;
      }
      previus.next = current.next;
    }
  }

  getDataAtIndex(index) {
    if (index >= this.size || index < 0) {
      return
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        current = current.next;
        currentIndex += 1;
      }
      return current.data
    }
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printList() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

