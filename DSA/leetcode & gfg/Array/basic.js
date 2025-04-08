let arr = [5,4,8,2,6,5,2];
console.log(arr);


let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 5, 6]);

// Reassign reference
set1 = set2;

console.log(set1); // Output: Set { 4, 5, 6 }
console.log(set2); // Output: Set { 4, 5, 6 }
