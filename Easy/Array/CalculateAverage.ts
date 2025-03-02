// Write a function which calculates the average of the numbers in a given array.

//     Note: Empty arrays should return 0.

export function findAverage(array) {
    if (array.length) return array.reduce((acc, curr) => acc += curr, 0) / array.length
    return 0;
}