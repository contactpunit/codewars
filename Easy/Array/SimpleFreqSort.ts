//     In this kata, you will sort elements in an array by decreasing frequency of elements.If two elements have
//  the same frequency, sort them by increasing value.

//     solve([2, 3, 5, 3, 7, 9, 5, 3, 7]) = [3, 3, 3, 5, 5, 7, 7, 2, 9]
// --We sort by highest frequency to lowest frequency.
// --If two elements have same frequency, we sort by increasing value.
// More examples in test cases.

// Good luck!

// Please also try Simple time difference
export function solve(arr) {
    const hash = arr.reduce((acc, curr) => {
        if (curr in acc) {
            acc[curr] += 1
        } else {
            acc[curr] = 1
        }
        return acc
    }, {})
    return arr.slice().sort((a, b) => hash[b] - hash[a] || a - b)
}