function abc(n) {
   let task = setInterval(()=>{
      console.log(n);
      n--;
   },1000);
   
   setTimeout(()=>{
      clearInterval(task);
   },20000);
}

abc(50);