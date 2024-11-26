
function sort(arr) {
   let i = 0;
   for (let j = 0; j < arr.length; j++) {
      if (arr[j] == 0) {
         if (i > 0) {
            swap(arr, i, j);
         } else {
            i++;
         }
         j++;
      } else if (arr[j] == 1) {
         swap(arr, i, j);
         i++;
         j++;
      } else {
         j++;
      }
   }
   return arr;
}

function swap(arr, i, j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

let arr = [0,2,1,2,0,1,1,2,0,1];

console.log(arr.join(", "));
let ans = sort(arr);

console.log(ans.join(", "));