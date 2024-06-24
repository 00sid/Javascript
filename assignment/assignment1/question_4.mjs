/*
make a arrow function named isEven , 
pass a value, that return true if the given number is even else return false
*/

// const isEven=(num)=>{
//     return num%2===0?true:false;
// }
const isEven=(num)=>{
    if(num%2===0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(19));