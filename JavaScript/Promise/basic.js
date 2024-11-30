// Improved Promise object code for better understanding

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
   // Simulate an asynchronous operation (like an API call)
   setTimeout(() => {
      // Randomly decide whether to resolve or reject the promise
      const success = Math.random() > 0.5;

      if (success) {
         // If the operation is successful, call the resolve function with the result
         resolve("Promise resolved successfully!");
      } else {
         // If the operation fails, call the reject function with the error
         reject("Promise rejected due to an error!");
      }
   }, 1000); // Simulate a delay of 1 second
});

// Use the then method to handle the resolved promise
// then is called when the promise is resolved
myPromise.then((result) => {
   console.log(result); // Log the result
})

.then(() => {
   console.log("This will run after the first promise is resolved.");
})
.catch((error) => {
   console.error("An error occurred in the first promise:", error);
});

// Use the catch method to handle the rejected promise
// catch will be called when the promise is rejected
myPromise.catch((error) => {
   console.error("An error occurred in the second promise:", error);
});