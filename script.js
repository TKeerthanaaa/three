"use strict";

// 1.Pattern Printing: Write a function that takes a positive integer n as input and prints a pattern like the following for n = 5:

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
let integer = 5;
let number = "";

for (let i = 1; i <= integer; i++) {
  for (let j = 1; j <= i; j++) {
    number += i;
  }
  number += "\n";
}
console.log(number);

// 2.Frequency Count: Write a function that takes an array of integers as input and returns an object representing the frequency count of each number in the array.
let arr = [1, 1, 5, 5, 5, 8, 7, 7];
let input = {};
for (let num of arr) {
  input[num] = input[num] ? input[num] + 1 : 1;
}
console.log(input);
console.log(input[1], input[5], input[8], input[7]);

// 3.Remove Duplicates: Write a function that takes an array as input and returns a new array with duplicates removed (maintaining the original order).
function RemoveDup(element) {
  let unique = [];
  for (let i = 0; i <= element.length; i++) {
    if (!unique.includes(element[i])) {
      unique.push(element[i]);
    }
  }
  return unique;
}
const element = [1, 2, 2];
console.log(RemoveDup(element));

// 4.Array Sum: Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
let Positive = (number) => {
  let value = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      value += number[i];
    }
  }
  return value;
};
let values = Positive([1, 2, -4, -5, 6]);
console.log(values);

// 5.Object Transformation: Given an array of objects with 'id' and 'name' properties, write a function that transforms the array into an object where the keys are the 'id' values and the values are the 'name' values.

// 6.Nested Array Sum: Write a function that takes a nested array of numbers as input and returns the sum of all elements in the array.
function nestedArray(input) {
  let sum = 0;

  for (let i = 0; i <= input.length; i++) {
    if (Array.isArray(arr[i])) {
      nestedArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
const nestArr = [1, 5, 6, [7, 2, 3], 2];
const sum = nestedArray(nestArr);
console.log(sum);

// 7.Largest Difference: Write a function that takes an array of numbers as input and returns the largest difference between any two elements in the array.

// 8.Array Rotation: Write a function that rotates elements of an array to the left by a given number of positions.
const arrRotation = ["elephant", "tiger", "lion", "deer"];
const nums = 3;
for (let i = 0; i <= nums; i++) {
  let animalElement = arrRotation.shift();
  let Push = arrRotation.push(animalElement);
}
console.log(arrRotation);

// 9.Object Sorting: Write a function that takes an array of objects with 'name' and 'age' properties and sorts the objects based on age in ascending order.

// 10.Array Intersection: Write a function that takes two arrays as input and returns an array containing the elements that are present in both arrays.
const interSection = function (arrayOne, arrayTwo) {
  return [...arrOne, ...arrTwo];
};
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [6, 7, 8, 9, 10];
console.log(
  `${[1, 2, 3, 4, 5]}   ${[6, 7, 8, 9, 10]}\n\n ${interSection(
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  )}`
);
