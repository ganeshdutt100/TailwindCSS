// call() = >
// function fun(name) {
//   console.log("Hello " + name);
// }

// fun("Nitesh");
// call method
// call(null,funNAme, arg)

// fun.call(null, "Ganesh Dutt");

function Emp(id, name) {
  this.id = id;
  this.name = name;
}

function PermanentEmp(id, name, salary) {
  this.salary = salary;
  Emp.call(this, id, name);
}
function TemporaryEmp(id, name, salary) {
  PermanentEmp.call(this, id, name, salary);
}

let emp1 = new PermanentEmp(1, "Nitesh", 3287387);
let emp2 = new TemporaryEmp(2, "Babul", 832738);

console.log(emp1);
console.log(emp2);

// this.nitesh  = nitesh
