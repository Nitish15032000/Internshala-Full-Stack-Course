var commonChars = function (words) {
   // Initialize the first word's frequency map
   let st1 = {};
   for (const char of words[0]) {
       st1[char] = (st1[char] || 0) + 1;
   }

   for (let i = 1; i < words.length; i++) {
       let st2 = {}; // Temporary frequency map for the current word
       const str = words[i];

       for (const char of str) {
           if (st1[char]) {
               st2[char] = (st2[char] || 0) + 1;
               st2[char] = Math.min(st2[char], st1[char]); // Update with minimum frequency
           }
       }

       // Update st1 to only include characters common so far
       st1 = st2;
   }

   // Build the result array from the final frequency map
   const res = [];
   for (const [char, count] of Object.entries(st1)) {
       res.push(...Array(count).fill(char));
   }

   return res;
};

console.log(commonChars(["bella", "label", "roller"])); // Output: ["e", "l", "l"]
