//Problem:
// - Write a node program that takes in an unlimited number of command line arguments and prints out the sum of them
// - if any argument is not a whole number, skip it
//-Do not support negative numbers though.

//node example.js 1 hello 2 -3 3 -> 6


// console.log(process.argv);

const commandLineArguments = process.argv;

function sumArguments(input){
//console.log(commandLineArguments[0]); //prints out the index 0
let sum = 0; 

// for (let i = 0; i < commandLineArguments.length; i++){  //simplifying this line use for..of loop
for (const arg of input){
  const converted = Number(arg);
  
  if (Number.isInteger(converted) && converted > 0){
    // console.log (converted);
    sum += converted;
  }
}

return sum;
}

const result = sumArguments(commandLineArguments);
console.log(result);