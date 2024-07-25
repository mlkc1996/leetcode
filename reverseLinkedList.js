const reverseLinkedList = (node, next = null) => {
    if (!node.next) {
        node.next = next;
        return node;
    }
    const head = reverseLinkedList(node.next, node);
    node.next = next;
    return head;
};

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const node = new Node(1, new Node(2, new Node(3)));
const new_head = reverseLinkedList(node);
console.log(new_head);