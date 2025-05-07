// call() = >
// function fun(name) {
//   console.log("Hello " + name);
// }

// fun("Nitesh");
// call method
// call(null,funNAme, arg)

// fun.call(null, "Ganesh Dutt");

// function Emp(id, name) {
//   this.id = id;
//   this.name = name;
// }

// function PermanentEmp(id, name, salary) {
//   this.salary = salary;
//   Emp.call(this, id, name);
// }
// function TemporaryEmp(id, name, salary) {
//   PermanentEmp.call(this, id, name, salary);
// }

// let emp1 = new PermanentEmp(1, "Nitesh", 3287387);
// let emp2 = new TemporaryEmp(2, "Babul", 832738);

// console.log(emp1);
// console.log(emp2);

// this.nitesh  = nitesh

// const person1 = {
//   name: "Ganesh",
// };
// const person2 = {
//   name: "Rahul",
// };

// function greet(city, country) {
//   console.log(
//     "Hello my name is " + this.name + " I am from " + city + " in " + country
//   );
// }

// greet.call(person1, "Noida", "India");
// greet.call(person2, "Delhi", "India");

// apply()------------------------------

// function.apply(thisArg,[arr])

// function greet(name) {
//   console.log("hello my name is " + name);
// }
// greet.apply(null, ["xyz"]);
// let arr = [1, 5, 2, 45, 7, 3, 8, 4, 9];

// let max = Math.max.apply(this, arr);
// let min = Math.min.apply(this, arr);
// console.log(max);
// console.log(min);

function intro(hobby, profession) {
  console.log(
    "My name is " +
      this.name +
      " i work as a " +
      profession +
      " and I Enjoy " +
      hobby
  );
}
const user1 = {
  name: "Ganesh Dutt",
};
const user2 = {
  name: "Krishna Dutt",
};

intro.apply(user1, ["coding", "Frontend Developer"]);
intro.apply(user2, ["MMA", "Frontend Developer"]);
