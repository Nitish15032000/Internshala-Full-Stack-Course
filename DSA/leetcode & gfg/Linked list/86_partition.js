class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

// Function to print the linked list
function printList(head) {
   let current = head;
   let result = [];
   while (current !== null) {
      result.push(current.data);
      current = current.next;
   }
   console.log(result.join(" -> "));
}

// Creating the linked list
let head = new Node(1);
let h1 = new Node(4);
head.next = h1;
let h2 = new Node(3);
h1.next = h2;
let h3 = new Node(2);
h2.next = h3;
let h4 = new Node(5);
h3.next = h4;
let h5 = new Node(2);
h4.next = h5;

console.log("Original Linked List:");
printList(head);

let x = 3;

var partition = function (head, x) {
   let left = new Node(0);  // Dummy node for left partition
   let lp = left;
   let right = new Node(0); // Dummy node for right partition
   let rp = right;

   while (head !== null) {
      if (head.data < x) {  
         lp.next = head;
         lp = lp.next;
      } else {
         rp.next = head;
         rp = rp.next;
      }
      head = head.next;
   }

   // Break any possible cycle in the right partition
   rp.next = null;

   // Attach the left and right partitions
   lp.next = right.next;

   return left.next; // Skip dummy node
};

console.log("Partitioned Linked List:");
printList(partition(head, x));
