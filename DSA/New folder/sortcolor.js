var sortColors = function (nums) {
   let low = 0, mid = 0, high = nums.length - 1;

   while (mid <= high) {
      if (nums[mid] == 0) {
         // swap low and mid
         [nums[low], nums[mid]] = [nums[mid], nums[low]];
         low++, mid++;
      } else if (nums[mid] === 1) {
         mid++;
      } else {
         // swap mid and high
         [nums[high], nums[mid]] = [nums[mid], nums[high]];
         high--;
      }
   }

   return nums;

};

// Test cases
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0,0,1,1,2,2]