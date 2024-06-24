let info = {
  name: "Ram", //name is key and "Ram" is value
  age: 12,
  address: {
    district: "Ktm",
    city: "Kalanki",
    country: "Nepal",
  },
  isStudent: true,
  hobbies: ["reading", "writing", "coding"],
};
console.log(info);
info.name = "Siddhartha";
console.log(info);
console.log(
  "My name is " +
    info.name +
    " is " +
    info.age +
    ` year old and main hobby is ${info.hobbies[0]}.`
);
console.log(info.address.district);
