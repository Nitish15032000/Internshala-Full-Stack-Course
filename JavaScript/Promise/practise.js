function simplePromiseDemo(success) {
   // Return a Promise
   return new Promise((resolve, reject) => {
       // Log "Promise is pending..."
       console.log("Promise is pending...");
       
       // Simulate a network request with setTimeout
       setTimeout(() => {
           if (success) {
               // Resolve the Promise with a success message
               resolve("Promise fulfilled: Data received!");
           } else {
               // Reject the Promise with an error message
               reject("Promise rejected: Error occurred!");
           }
       }, 2000);
   });
}

// Example usage:
// Demonstrate fulfilled state
simplePromiseDemo(true)
   .then((message) => {
       // Handle success
       console.log(message);
   })
   .catch((error) => {
       // Handle error
       console.log(error);
   });

// Demonstrate rejected state
simplePromiseDemo(false)
   .then((message) => {
       // Handle success
       console.log(message);
   })
   .catch((error) => {
       // Handle error
       console.log(error);
   });