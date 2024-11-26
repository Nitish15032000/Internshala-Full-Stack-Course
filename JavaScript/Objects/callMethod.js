// function fullName() {
//    console.log(`${this.firstName} ${this.lastName}`);
// }

// user1 = {
//    firstName: "Amresh",
//    lastName: "Kumar",
// }

// fullName.call(user1); // Output: Amresh Kumar


const name1 = {
   
   firstName : "ram",
   lastName : "sita",
      
   fullName: function() {
      console.log(`${this.firstName} ${this.lastName}`);
   }
}

const user = {
   firstName: "Amresh",
   lastName: "Kumar",
}

name1.fullName.call(user); 