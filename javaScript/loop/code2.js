document.writeln("While loop");

// let value = 1;
// while (value <= 10) {
//   console.log(value);
//   value++;
// }

// question 1  : Write a while loop to calculate the sum of numbers from 1 to 10.
// Expected Output:
// Sum is 55

// Problem: 2
// Use a while loop to find the factorial of 5.

// Expected Output: Factorial is 120

// let n = 4;
// let fact = 1;

// while (n > 1) {
//   fact *= n; //  fact = fact * n;
//   n--;
// }
// console.log("Factorial is : " + fact);

// 4 * 3 * 2 * 1
//  2
//  4
//  6
//  8
// sum  = 20

//  count
// Problem: 5
// Write a while loop to count how many digits are in a number.

// For example: input = 45219, output = 5

let number = 45219;
let count = 0;

while (number > 0) {
  count++;
  number = Math.floor(number / 10);
}
console.log(count);

// index      number      count    number/10
// 1              45219       1        4521.9
// 2              4521       2        452.1
// 3              452       3        45.2
// 4              45       4        4.5
// 5              4       5        .0
