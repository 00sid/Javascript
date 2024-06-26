// let array1 = [1, 2, 3];
// let array2 = array1.map((element, index) => element + 10);
// console.log(`[${array1}] => [${array2}]`);
// let name = ["n", "i", "T", "A", "n"];
// let newName = name.map((element, index, arr) => {
//   return index === 0 ? element.toUpperCase() : element.toLowerCase();
// });
// console.log(newName);

let arry1 = ["my", "name", "is"];
// let arry2 = arry1.map((element, index) => {
//   let wordArry = element.split("");
//   wordArry[0] = wordArry[0].toUpperCase();

//   return wordArry.join("");
// });
// console.log(arry2);
const capitalLetterFunction = (input) => {
  let inputArray1 = input.split("");

  let inputArray2 = inputArray1.map((element, index) => {
    return index === 0 ? element.toUpperCase() : element.toLowerCase();
  });
  let output = inputArray2.join("");
  return output;
};

let arr2 = arry1.map((element, index) => {
  return capitalLetterFunction(element);
});
console.log(arr2);
