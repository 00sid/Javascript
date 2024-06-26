// let numArray = [1, 2, 6, 3];
// let evenNumArray = numArray.filter((element, index) =>
//   element % 2 === 0 ? true : false
// );
// console.log(evenNumArray);

//filter postive number
// let allNumber = [-2, -3, 1, 2, 0, 12];

// let postiveNum = allNumber.filter((element, index) =>
//   element >= 0 ? true : false
// );
// console.log(postiveNum);

let allCharacter = [1, 2, 3, "hi", "hello", "world"];
let stringOnly = allCharacter.filter((element, index) =>
  typeof element === "string" ? true : false
);
console.log(stringOnly);
