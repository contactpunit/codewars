// DESCRIPTION:
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

export function largest(n, array) {
    // Find the n highest elements in a list
    return n === 0 ? [] : array.sort((a, b) => a - b).slice(-n)
  }