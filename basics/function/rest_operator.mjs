//normal function
function showValue(a) {
  console.log(a);
}

showValue(10);

//rest operator "..."  which is used to convert the normal variable to array

function showValueRestOp(...a) {
  //...a is used to store multiple value
  console.log(a);
}

showValueRestOp(10, 20, 30);
