var isLongPressedName = function (name, typed) {
   let i = 0;
   let j = 0;
   // if (name.charAt(0) != typed.charAt(0))
   //    return false;
   // if (name.length > typed.length) {
   //    return false;
   // }
   while (j < typed.length) {
      if (name.charAt(i) == typed.charAt(j)) {
         i++;
         j++;
      } else if (name.charAt(i - 1) == typed.charAt(j)) {
         j++;
      } else {
         return false;
      }
   }
   if (i < name.length) {
      return false;
   }
   return true;
};

// Test cases
console.log(isLongPressedName("alex", "aaleex")); // Output: true