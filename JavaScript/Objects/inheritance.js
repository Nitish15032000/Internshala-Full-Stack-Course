class parent {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   getInfo() {
      return `Name: ${this.name}, Age: ${this.age}`;
   }
}

class child extends parent {
   constructor(name, age, viplevels) {
      // this is use for calling parent's class
      super(name, age);
      this.viplevels = viplevels;
   }

   getVipInfo() {
      return `Name: ${this.name}, Age: ${this.age}, VIP Levels: ${this.viplevels}`;
   }
}

const obj1 = new child('Nitish', 23);
const obj2 = new child('Nitish', 23, "level 1");

console.log(obj1.getInfo()); // Output: Name: Nitish, Age: 23
console.log(obj2.getVipInfo());