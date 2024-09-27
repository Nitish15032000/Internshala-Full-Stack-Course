// let str = ["Nitish", "Amresh", "Golu", "Krishna"];
// let i = 0;
// let len_str = str.map(()=>{
//    let res = 0;
//    res = str[i].length;
//    i++;
//    return res;
// });

// console.log(str);
// console.log(len_str);
let str = ["Nitish", "Amresh", "Golu", "Krishna"];
let len_str = str.map((item) => {
   let res = item.length;
   return res;
});

console.log(str);
console.log(len_str);