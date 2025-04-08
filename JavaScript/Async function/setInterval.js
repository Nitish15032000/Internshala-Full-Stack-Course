
let count = 1;
let task = setInterval(() => {
   console.log("run time : ", count);
   count++;
   if (count === 6) {
      clearInterval(task);
   }

}, 1000);

// Output: run time : 1, run time : 2, run time : 3, run time : 4, run time : 5

function task1() {
   let count = 1; // Initialize count inside the function
   const intervalId = setInterval(() => {
      console.log("table of five : ", count*5);
      count++;
      if (count === 11) {
         clearInterval(intervalId); // Pass the interval ID to clearInterval
      }
   }, 1000);
}

task1();


