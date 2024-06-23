/* 
make a arrow function that take a number 
and return you can enter room only if the enter number is less than 18 else you can not enter
*/

const canEnterRoom=(age)=>{
    return age<18?"You can enter the room":"You can not enter the room";
}
console.log(canEnterRoom(18));