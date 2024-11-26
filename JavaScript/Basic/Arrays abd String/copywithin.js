let arr = [0,1,2,3,4,5,6,7,8];
arr.copyWithin(2, 5, 9); // change the original array

// arr.reverse(); // reverse the original array
let revarr = [...arr].reverse();

console.log(arr); // [0,1,2,3,4,5,6,7,8]


console.log(revarr); // [8,7,6,5,6,5,4,3,2,1,0]


let array = [1, 2, 5];
array.splice(2, 0, 3, 4);  // Insert 3 and 4 at index 2

console.log(array);  // [1, 2, 3, 4, 5]
