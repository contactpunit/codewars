// Steps

// Square the numbers that are greater than zero.
// Multiply by 3 every third number.
// Multiply by -1 every fifth number.
// Return the sum of the sequence.
// Example
// { -2, -1, 0, 1, 2 } returns -6

// 1. { -2, -1, 0, 1 * 1, 2 * 2 }
// 2. { -2, -1, 0 * 3, 1, 4 }
// 3. { -2, -1, 0, 1, -1 * 4 }
// 4. -6

export var calc = function(a) {
    return a.reduce((acc, curr, idx) => {
        if (curr > 0) curr = curr * curr
        if ((idx + 1) % 3 === 0) curr = curr * 3
        if ((idx + 1) % 5 === 0) curr = curr * -1
        acc += curr
        return acc
    }, 0)
}