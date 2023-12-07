// todays task
//You are given an array of numbers. Your task is to use iteration methods with arrow functions to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Filtering

Write code to perform the following tasks using the filter method with arrow functions:
Q1) Create a new array containing numbers that are divisible by 5.
*****************************************************************/
const divsBy5 = numbers.filter((x) => x % 5 == 0); //alternate solution
console.log(divsBy5);

/*****************************************************************
Mapping

Write code to perform the following tasks using the filter method with arrow functions:
Q2) Create a new array that contains each number multiplied by 2.
*****************************************************************/
const multiBy2 = numbers.map((x) => x * 2);
console.log(multiBy2);

/*****************************************************************
Combining Filtering and Mapping

Combine the filter and map methods to perform the following task with arrow functions: 
Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
*****************************************************************/
const grtrThnOrEq20 = numbers.filter((x) => x >= 20).map((x) => x * x);

//1st trial
// const grtrThnOrEq20 = numbers.filter((x) => x >= 20);
// const grtrThnOrEq20AndSquared = grtrThnOrEq20.map((x) => x ** 2);
// console.log(grtrThnOrEq20AndSquared);
