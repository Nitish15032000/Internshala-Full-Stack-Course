let str = "hello";
str[0] = 'H';  // This doesn't change the string
str = "Nitish"; // This changes the string
console.log(str);  // "hello" (unchanged)


let str1 = "JavaScript";
console.log(str1.substr(6, 2));  // "Script"

let str2 = "   Hello        World   ";
console.log(str2.trim());  // "Hello World"



let str3 = "Hello, World! Hello, World!";
let newStr = str3.replace(/World/g, "JavaScript");
console.log(newStr);  // "Hello, JavaScript! Hello, JavaScript!"