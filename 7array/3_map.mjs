// let array1 = [1, 2, 3];
// let array2 = array1.map((element, index) => element + 10);
// console.log(`[${array1}] => [${array2}]`);
let name = ["n", "i", "T", "A", "n"];
let newName = name.map((element, index, arr) => {
  return index === 0 ? element.toUpperCase() : element.toLowerCase();
});
console.log(newName);
