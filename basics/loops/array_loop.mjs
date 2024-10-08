const arr = [1, 2, 3, 4, 5];

//for of//
// for (const num of arr) {
//   console.log(num);
// }

//map//
// const map = new Map();
// map.set("Nep", "Nepal");
// map.set("In", "India");

// map.set("USA", "United States of America");

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

//filter:- filter out the values//

// const num = [1, 2, 3, 4, 5, 6, 67, 8, 9];
// const newNum = num.filter((n) => n > 5);
// console.log(newNum);

//forEach//

// num.forEach((e) => {
//   console.log(e);
// });

//map:- return values//

// const num = [1, 2, 3, 4, 5, 6, 67, 8, 9];
// const newNum = num.map((n) => n + 10);
// console.log(newNum);

//combining map and filter//

// const num = [1, 2, 3, 4, 5, 6, 67, 8, 9];
// const newNum = num
//   .map((n) => n * 10)
//   .map((n) => n + 1)
//   .filter((n) => n > 50);
// console.log(newNum);

//reduce:- reduce array to single form

const num = [1, 2, 3, 4, 5, 6, 67, 8, 9];
const initailVal = 0;
const sumOfArray = num.reduce(
  (inital, cureentVal) => inital + cureentVal,
  initailVal
);
console.log(sumOfArray);
