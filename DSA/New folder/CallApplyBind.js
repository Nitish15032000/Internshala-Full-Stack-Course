let user1 = {
   name: "Suresh"
};

let user2 = {
   name: "Mahesh"
};

function sayHello() {
   console.log("Hello, " + this.name);
}

sayHello.call(user1);  // Output: Hello, Suresh
sayHello.call(user2);  // Output: Hello, Mahesh


// apply
let numbers = [10, 50, 30, 80, 5];
let maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // Output: 80


// Bind
let button = {
   text: "Click Me!",
   handleClick: function() {
       console.log("Button Clicked: " + this.text);
   }
};

let btn = document.createElement("button");
btn.innerText = button.text;
btn.onclick = button.handleClick.bind(button); // `this` को bind किया

document.body.appendChild(btn);
