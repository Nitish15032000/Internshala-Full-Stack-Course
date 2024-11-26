function processNumbers(numbers, callback) {
  return numbers.map(callback);
}

// Callback function to square a number
function square(number) {
  return number * number;
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processNumbers(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]