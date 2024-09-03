// console.log(a)
// var a;
// console.log(a)
// a = 10;
// console.log(a)
// console.log(b)
// var b = 8;
// console.log(b)

// var age = 20
// function parent() {
   
//    var age;
//    function child() {
//       console.log(age)   
//    }
//    child()
//    console.log(age)   

   
// }
// parent()
function parent() {
   var age = 20
   
   
   function child() {
      let age = 10;

      console.log(age)  
      function child2() {
         console.log(age)  
         age = 30
      } 
      child2()
      console.log(age)  
   }
   child()
   console.log(age)
   
}
parent()