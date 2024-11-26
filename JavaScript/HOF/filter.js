// let numbers = [5, 12, 8, 130, 44, 5, 52];
// let filteredNumbers = numbers.filter(function(number) {
//     return number > 10;
// });
// console.log(filteredNumbers); // [12, 130, 44, 52]


let age = [14,15,18,20,16,20,25,45,50];

let new_age = age.filter((age) => age > 17);
let incre_age = new_age.map((num) => num+10)
console.log(age);
console.log(new_age);
console.log(incre_age);
