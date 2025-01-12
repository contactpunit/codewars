// Easy; Make a box
// Given a number as a parameter(between 2 and 30), return an array containing strings which form a box.
// Like this:

// n = 5

// [
//     '-----',
//     '-   -',
//     '-   -',
//     '-   -',
//     '-----'
// ]
// n = 3

// [
//     '---',
//     '- -',
//     '---'
// ]

export function box(n) {
    const result: any[] = []
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === n - 1) {
            result.push('-'.repeat(n))
        } else {
            if (n > 2) {
                result.push('-'.concat(' '.repeat(n - 2)).concat('-'))
            }
        }
    }
    return result
}
