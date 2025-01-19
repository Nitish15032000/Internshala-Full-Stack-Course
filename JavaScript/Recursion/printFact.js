function printfact(n) {
   if (n == 0 || n == 1) {
      console.log(1);
      return 1;
   }
   let result = n * printfact(n - 1);
   console.log(result);
   return result;
}

printfact(5);