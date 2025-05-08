document.writeln("Bind method ");

// function.bind(thisArg , [arg1[age2[...]]])

// function kuchBhi(name) {
//   console.log("Hello, " + name);
// }

// let a = kuchBhi.bind(null, "John");
// console.log(a);

// let website = {
//   name: "javaScript",
//   getName: function () {
//     return this.name;
//   },
// };

// let changeName = {
//   name: "React",
// };

// let output = website.getName();
// console.log(output);

// let unboundGetName = website.getName;
// let boundGetName = unboundGetName.bind(changeName);

// console.log(boundGetName());

// let person = {
//   name: "",
//   age: 30,
// };

// console.log(person.name);

// let person = {
//   name: "Ganesh Dutt",
// };
// function sayHello() {
//   console.log("Hello, " + this.name);
// }
// let output = sayHello.bind(person);
// output();

// call    apply  bind
// yes      yes    no    - calls function immediately
// individually     in an Array   individually  - pass Arguments
// no       no      yes

document.writeln("toString()");

// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(typeof add(10, 50));
// console.log(typeof add(10, 50).toString());
