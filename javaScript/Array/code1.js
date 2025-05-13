document.writeln("Array");

let arr = [1, 4, 5, 3, "Ganesh dutt"];
for (let value of arr) {
  console.log(value);
}

let emptyArray = [];
emptyArray[0] = 1;
emptyArray[1] = 8;
emptyArray[2] = 12;

for (let value1 of emptyArray) {
  console.log(value1);
}

console.log(emptyArray); // Output: []
// console.log(arr);

let constructorArray = new Array();

constructorArray[0] = 12;
constructorArray[1] = "Hello";

console.log(constructorArray);
