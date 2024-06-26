//[1,3,10]=[1,10] correct
//[1,3,10]=[1] correct
//[1,3,10]=[1,9] incorrect

let arry1 = [2, 3, 4, 5, 6, 7];
let arr2 = arry1.filter((element, index) => (element >= 5 ? true : false));
console.log(arr2);
