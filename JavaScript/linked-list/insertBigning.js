class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

// Create a linked list with three nodes: 1 -> 2 -> 3
let head = new Node(10);
let firstNode = new Node(22);
let secondNode = new Node(33);
let thirdNode = new Node(38);
let fourthNode = new Node(52);
let fivethNode = new Node(99);

// Connect the nodes to the first node
head.next = firstNode;
firstNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;
fourthNode.next = fivethNode;

// Print the linked list data
function printLinkedList(node) {
   let currentNode = node;
   while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
   }
}

// insert at beginning
function beginning(value) {

   let begin = new Node(value);
   begin.next = head;
   head = begin;
   console.log('Node inserted at beginning and head pointing to the beginning');
}

function insertAnywere(prevNode, data) {
   let newNode = new Node(data);
   newNode.next = prevNode.next;
   prevNode.next = newNode;
   console.log('Node inserted anywhere in the linked list');
   
}

printLinkedList(head); // output: 10, 22, 33, 38, 52, 99
insertAnywere(thirdNode, 85);

// beginning(5);

printLinkedList(head);  // output: 5, 10, 22, 33, 38, 52, 99
