class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.tail = node;
    }
    this.size += 1;
  }
  
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  insertAt(index, data) {
    let node = new Node(data);
    if (index >= this.size || index < 0) {
      return
    } 
    else if(index === 0) {
      this.prepend(data);
    }
    else {
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

  removeAt(index) {
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

  pop() {
    this.removeAt(this.size -1);
  }

  atIndex(index) {
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

  find(data) {
    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (current.data === data) {
        return currentIndex;
      }
      current = current.next;
      currentIndex += 1;
    }
    return null;
  }

  contains(data) {
    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
      currentIndex += 1;
    }
    return false;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  toString() {
    let resultString = '';
    let current = this.head;
    while(current) {
      resultString += `( ${current.data} ) -> `
      current = current.next;
    }
    resultString += 'null';
    console.log(resultString);
  }
}

const list = new LinkedList();

list.append('1');          // ( 1 ) -> null
list.append('2');          // ( 1 ) -> ( 2 ) -> null
list.append('3');          // ( 1 ) -> ( 2 ) -> ( 3 ) -> null
list.prepend('0');         // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
list.insertAt(0, 'A') ;    // ( 'A' ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
list.pop();                // ( 'A' ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> null
list.atIndex(0);           // ( 0 )
list.find(2)               // 2
list.contains('A');        // true
list.toString();           // ( A ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> null