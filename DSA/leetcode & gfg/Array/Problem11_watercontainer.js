
// optimal approach 
// var maxArea = function(height) {

// };



let height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height)); // 49// brute force approach 
var maxArea = function(height) {

   let maxArea = 0;

   for (let lest = 0; lest < height.length; lest++) {
      
      for (let right = lest + 1; right < height.length; right++) {
         let l = right - lest;
         let h = Math.min(height[lest], height[right]);
         let area = l * h;
         if (area > maxArea) {
            maxArea = area;
         }
      }
      

   }
   
   return maxArea;
};