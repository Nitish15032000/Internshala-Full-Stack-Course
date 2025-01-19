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
thirdNode.next = fivethNode;


// function for searching the key 
function searching(head, key) {
   let curr = head;
   while (curr!= null) {
      if (curr.data === key) {
         console.log(key + " found at position " + curr);
         return;
      }
      curr = curr.next;
   }
   console.log(key + " not found in the linked list");
   return;
}

// search for a key

searching(head, 31);