// DESCRIPTION:
// In this Kata, you will be given an array of integers whose elements have both a negative and a 
// positive value, except for one integer that is either only negative or only positive. 
// Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

export function solve(arr) {
    arr.sort((a, b) => a - b)
    let i = 0
    while (arr[i] < 0) {
        const l = arr.slice(i + 1).find(e => e === -arr[i])
        if (!l) return arr[i]
        i += 1
    }
    if(arr[i * 2] !== undefined) return arr[i * 2]
}

