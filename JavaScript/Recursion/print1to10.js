function printNo(n) {
   if (n>0) {
      printNo(n-1);
      console.log(n);
   }
  

}

printNo(5); // Output: 1,2,3,4,5

