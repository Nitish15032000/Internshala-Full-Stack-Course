const diameter = (redius) =>  2*redius;
const perimeter = (redius) =>  2*Math.PI*redius;
const area = (redius) =>  Math.PI*redius*redius;

const master = (redius_arr, logic) =>{
   let output = [];

   for (let i = 0; i < redius_arr.length; i++) {
      let ans = logic(redius_arr[i]);
      output.push(ans);
   }

   return output;
}

let r = [7,14,15,30];
console.log(r);
let ans = master(r, perimeter)
// let ans1 = master(r, (redius) =>  2*Math.PI*redius)

// toFoxed() method is used for 2 digit decimal number.
ans = ans.map(num => num.toFixed(2));
console.log(ans);
// console.log(typeof(ans[1]));
// console.log(ans1);
// console.log(typeof(ans1[1]));
