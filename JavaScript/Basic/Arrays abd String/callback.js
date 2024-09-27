function add(a , b) {
   return (a+b);
}

function helper(logic) {
   let a = 10;        
   let b = 20;
   
   console.log(logic(a, b));

}
helper(add);