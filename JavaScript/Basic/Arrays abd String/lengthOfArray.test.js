// Unit test for lengthOfArray.js
// Test case: Should handle an empty array and return an empty array for lengths

const lengthOfArray = require('./lengthOfArray'); // Assuming lengthOfArray.js is in the same directory

test('handles empty array and returns empty array for lengths', () => {
  const inputArray = [];
  const expectedOutput = [];
  const result = lengthOfArray(inputArray);
  expect(result).toEqual(expectedOutput);
});