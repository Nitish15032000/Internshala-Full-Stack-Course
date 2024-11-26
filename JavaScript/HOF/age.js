let age = [15,18,19,25,45,12,35,11,10,17,1];

// let new_age = age.filter((item)=>{
//    if (item > 17) {
//       return item   
//    }
   
// });

// console.log(age);
// console.log(new_age);


/**
 * This function filters an array of ages and returns a new array containing only ages greater than 17.
 *
 * @param {Array<number>} age - The array of ages to be filtered.
 * @returns {Array<number>} - A new array containing only ages greater than 17.
 */
let new_age = age.filter((item) => {
   if (item > 17) {
      return item;
   }
});

console.log(age); // Output: [15,18,19,25,45,12,35,11,10,17,1]
console.log(new_age); // Output: [18,19,25,45,35]
