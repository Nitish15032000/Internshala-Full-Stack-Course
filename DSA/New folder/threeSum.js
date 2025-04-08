var threeSum = function (nums) {
   const res = [];
   let len = nums.length;
   nums.sort((a, b) => a - b); // Sorting helps in avoiding duplicate triplets

   for (let i = 0; i < len - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for `i`

      let mp = new Map(); // Reset map for each new `i`
      for (let j = i + 1; j < len; j++) { // Ensure `j` is always after `i`
         let c = 0 - (nums[i] + nums[j]);
         if (mp.has(c)) {
            res.push([nums[i], nums[j], c]);

            // Skip duplicate `j` values
            while (j + 1 < len && nums[j] === nums[j + 1]) j++;
         }
         mp.set(nums[j], true); // Store number in map
      }
   }

   return res;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]