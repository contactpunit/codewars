// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

export function arrayLeaders(numbers){
    return numbers.filter((num, idx) => num > (numbers.slice(idx + 1).reduce((acc, curr) => acc += curr, 0)))
  }