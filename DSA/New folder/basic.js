function greet(name, callback) {
   console.log("Hello, " + name);
   callback();
}
greet("John", function() {
   console.log("Callback executed!");
});

console.log(typeof null); // "object"

console.log(1 + "2" ); // "122"