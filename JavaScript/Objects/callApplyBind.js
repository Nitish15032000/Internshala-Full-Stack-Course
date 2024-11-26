function createGreeting(firstName, lastName) {
  // Define person object with firstName and lastName properties
  const person = {
   firstName: firstName,
   lastName: lastName,
  };

  // Define greet function within createGreeting
  function greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }

  // Use call to invoke greet with person context (callGreet)
  function callGreet() {
   greet.call(person);
  }
  // Use apply to invoke greet with person context and array of arguments (applyGreet)
  function applyGreet() {
   greet.apply(person);
  }
  // Use bind to create a bound function and assign it to bindGreet
  const bindGreet = greet.bind(person);

  callGreet();
  applyGreet();
  bindGreet();
}

createGreeting("Nitish", "Kumar");
