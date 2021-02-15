function add(num1, num2 = 40){
   // if(num2 == undefined){
        //num2 = 0;
   // }
   //shortcut
  // num2 = num2 || 0;
 // num2 = num2 || 40;
    return num1 + num2;
}
const total = add(10, 20);
//const total = add(20);
// all comment out things are default parameter.we can use one of those if we dont get any number
console.log(total);