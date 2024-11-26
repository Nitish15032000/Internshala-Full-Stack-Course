function createGreeting(name, callback) {
   setTimeout(() => {
      const greeting = `Good morning ${name}`
      // return greeting;
      callback(greeting); // pass the greeting to the callback function
   }, 1000);
}

function displayMassage(massage) {
   console.log(massage);
}

createGreeting('Nitish', displayMassage); 
// const massage = createGreeting('Nitish');
// displayMassage(massage); // display underlined because event handlers.