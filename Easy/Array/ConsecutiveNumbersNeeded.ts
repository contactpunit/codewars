// DESCRIPTION:
// Write a function that takes an array of unique integers and returns the minimum
//  number of integers needed to make the values of the array consecutive from the lowest 
// number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0

export function consecutive(array) {
    // const total = array.sort().map((e, idx) => {
    //     if (idx === 0) return 0
    //     else return e - array[idx - 1] - 1
    // } )
    const total = array.sort((a, b) => a - b).reduce((acc, curr, idx) => {
        if (idx === 0) return 0
        else return acc += curr - array[idx - 1] - 1
    }, 0 )
    return total
}