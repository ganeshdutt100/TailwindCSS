//       *
//     * * *
//   * * * * *
// * * * * * * *

let row = 4;
for (let i = 1; i <= row; i++) {
  // space
  for (let j = 1; j <= row - i; j++) {
    // console.log(" ");
    document.writeln("&nbsp;&nbsp;");
  }
  //   value print *
  for (let k = 1; k <= 2 * i - 1; k++) {
    // console.log("*");
    document.writeln("*");
  }
  //   console.log("\n");
  document.writeln("<br>");
}

//  row = 2 *  1 -  1 =  1
//  row = 2 *  2 -  1 =  3
//  row = 2 *  3 -  1 =  5
//  row = 2 *  4 -  1 =  7
