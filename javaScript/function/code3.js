document.writeln("Bind method ");

// function.bind(thisArg , [arg1[age2[...]]])

// function kuchBhi(name) {
//   console.log("Hello, " + name);
// }

// let a = kuchBhi.bind(null, "John");
// console.log(a);

let website = {
  name: "javaScript",
  getName: function () {
    return this.name;
  },
};

let changeName = {
  name: "Node.js",
};

// let output = website.getName();
// console.log(output);

let unboundGetName = website.getName;
let boundGetName = unboundGetName.bind(changeName);

console.log(boundGetName());
