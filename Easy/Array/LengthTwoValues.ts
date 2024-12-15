// Given an integer n and two other values, build an array of size n filled with these
//  two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []


export function alternate(n, firstValue, secondValue) {
    return (new Array(n).fill(0)).map((_, idx, array) => idx % 2 === 0  ? array[idx] = firstValue : array[idx] = secondValue)
}