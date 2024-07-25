class Node {
  constructor(value, prev = null, next = null) {
    this.val = value;
    this.setPrev(prev);
    this.setNext(next);
  }

  setPrev(prev) {
    this.prev = prev;
    if (prev) {
      prev.next = this;
    }
  }

  setNext(next) {
    this.next = next;
    if (next) {
      next.prev = this;
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.initialise();
  }

  initialise() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(value) {
    if (!this.length) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value, this.tail);
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.length) {
      return null;
    }
    const node = this.tail;
    this.tail = node.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.length--;
    node.prev = null;
    return node;
  }

  shift() {
    if (!this.length) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    if (this.head !== null) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    node.next = null;
    this.length--;
    return node;
  }

  unshift(value) {
    const node = new Node(value, null, this.head);
    this.head = node;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    const from_left = index - 0 < this.length - 1 - index;
    let node = from_left ? this.head : this.tail;
    let counter = from_left ? 0 : this.length - 1;
    if (from_left) {
      while (counter < index) {
        node = node.next;
        counter++;
      }
    } else {
      while (counter > index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    let node = this.get(index);
    if (node === null) {
      return false;
    }
    node = new Node(value, node.prev, node);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let node = this.get(index);
    if (node.prev) {
      node.prev.setNext(node.next);
    }
    node.setPrev(null);
    node.setNext(null);
    this.length--;
    return node;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }
    reverse2(this.head);
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }

  /**
   * @private
   */
  reverse2(node, next = null) {
    if (!node.next) {
      node.next = next;
      node.prev = null;
      return node;
    }
    const head = reverse2(node.next, node);
    node.prev = node.next;
    node.next = next;
    return head;
  }
}

const list = new DoublyLinkedList();
list.push(5); // doublyLinkedList
console.assert(list.length === 1, "passed");
console.assert(list.head.val === 5, "passed");
console.assert(list.tail.val === 5, "passed");
console.assert(list.head.prev === null, "passed");
list.push(10);
console.assert(list.length === 2, "passed");
console.assert(list.head.val === 5, "passed");
console.assert(list.head.next.val === 10, "passed");
console.assert(list.tail.val === 10, "passed");
console.assert(list.head.next.prev.val === 5, "passed");
list.push(15);
console.assert(list.length === 3, "passed");
console.assert(list.head.val === 5, "passed");
console.assert(list.tail.val === 15, "passed");
console.assert(list.tail.prev.val === 10, "passed");
console.assert(list.head.next.next.val === 15, "passed");
