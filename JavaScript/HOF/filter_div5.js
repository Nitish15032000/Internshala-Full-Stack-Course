let arr = [45, 55, 76, 87,  100,98,  102,105];

let result = arr.filter((item) => {
   if (item % 5 == 0) 
      return item;
});

let result1 = arr.filter((item) => {
   if(item%5 == 0)
      return true;
});

console.log(result);
console.log(result1);

let val = 35*168.93;
 let val1 = 5900.21 - val;
console.log(val);
console.log(val1);
