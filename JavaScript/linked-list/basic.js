
class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

// Create a linked list with three nodes: 1 -> 2 -> 3
let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3);

// Connect the nodes to the first node
head.next = firstNode;
firstNode.next = secondNode;

// Print the linked list data

function printLinkedList(node) {
   let currentNode = node;
   while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
}

printLinkedList(head); // Output: 1 2 3
