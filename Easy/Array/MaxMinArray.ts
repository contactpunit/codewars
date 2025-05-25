// Description:
// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15, 11, 10, 7, 12]) = [15, 7, 12, 10, 11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.
export function solve(arr) {
    const result: any = []
    let start = 0
    arr.sort((a, b) => b - a)
    while (start < Math.floor(arr.length / 2)) {
        result.push(arr[start])
        result.push(arr[arr.length - 1 - start])
        start += 1
    }
    if ((arr.length % 2) !== 0) result.push(arr[start])
    return result
}