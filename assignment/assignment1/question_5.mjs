/*
make a arrow function that takes 3 input as number and return average of given number
 */

const average=(num1,num2,num3)=>{
    return (num1+num2+num3)/3;
}
let num1=1;
let num2=3;
let num3=3;
console.log(`The average of ${num1},${num2} & ${num3} is ${average(num1,num2,num3).toFixed(2)}`);