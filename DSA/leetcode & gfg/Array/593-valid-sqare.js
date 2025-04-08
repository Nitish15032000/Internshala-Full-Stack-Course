var validSquare = function(p1, p2, p3, p4) {
   // Function to calculate squared distance between two points
   const distance = (a, b) => {
       return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
   };

   // Store all six distances
   let dists = [
       distance(p1, p2), distance(p1, p3), distance(p1, p4),
       distance(p2, p3), distance(p2, p4), distance(p3, p4)
   ];

   // Sort distances in ascending order
   dists.sort((a, b) => a - b);

   // Check conditions for a valid square
   return (
       dists[0] > 0 &&  // Sides should have positive length
       dists[0] === dists[1] &&
       dists[1] === dists[2] &&
       dists[2] === dists[3] &&  // First 4 distances should be equal (sides)
       dists[4] === dists[5] &&  // Last 2 distances should be equal (diagonals)
       2 * dists[0] === dists[4] // Diagonal should be twice the side length
   );
};

// Test cases
console.log(validSquare([0,0], [1,1], [1,0], [0,1]));  // Output: true

