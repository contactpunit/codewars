// DESCRIPTION:
// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

// the desired output is

// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

// Your task is to create a function that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

// Note: Return a new array, rather than modifying the passed array.

export function arrayManip(array){
    const temp = array.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0])
    const result = array.map((e, i) => (temp.find(k => k[0] > e && k[1] > i) || [-1])[0])
    return result
}
  