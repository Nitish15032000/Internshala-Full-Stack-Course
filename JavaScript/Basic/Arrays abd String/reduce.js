let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Find the max number
let max = numbers.reduce((acc, curr) => Math.max(acc, curr), 0);
console.log(max); // 5
