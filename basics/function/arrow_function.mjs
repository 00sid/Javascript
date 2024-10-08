//normal function
//sumOne(1); in expression function , it cannot be called before it's declaration
const sumOne = function (a) {
  console.log(a + 1);
};

sumOne(1);

//arrow function
const sumTwo1 = (a, b) => {
  return a + b;
};

console.log(sumTwo1(2, 3));
//direct return without using return keyword
const sumTwo2 = (a, b) => a + b;

console.log(sumTwo2(2, 9));
