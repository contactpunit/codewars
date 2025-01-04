// Task
// You are given a positive integer n. We intend to make some ascending sequences according to the following rules:

// Make a sequence of length 1: [ n ]

// Or, insert a number to the left side of the sequence. But this number can not exceed half of the first number of the sequence.

// Follow rule 2, continue insert number to the left side of the sequence.

// Your task is to count the number of all possible sequences, and return it.

// If you do not understand the task, please read the rewritten version below:

// You are given a positive integer n. Your task is to count the number of such sequences:

// It should be an ascending sequence;

// It should end with number n.

// Each number in the sequence should smaller or equals to the half of its right, except for the last number n.

// We define that a sequence containing only a number n is a valid ascending sequence.

// Examples
// For n = 6, the output should be 6.

// All sequences we made are:

// [6]

// insert a number to the left:

// [1,6]
// [2,6]
// [3,6]

// continue insert number:

// [1,2,6]
// [1,3,6]
// There are 6 sequences in total.

// For n = 10, the output should be 14.

// All sequences we made are:

// [10]

// insert a number to the left:

// [1,10]
// [2,10]
// [3,10]
// [4,10]
// [5,10]

// continue insert number:

// [1,2,10]
// [1,3,10]
// [1,4,10]
// [2,4,10]
// [1,5,10]
// [2,5,10]

// continue insert number:

// [1,2,4,10]
// [1,2,5,10]
// There are 14 sequences in total.

let result
export function makeSequences(n) {
    if (typeof n === 'number') {
        result = []
        result.push([n])
        return makeSequences([n])
    } else {
        const first = n.slice(0, 1)
        if (first === 1) return
        else {
            const half = Math.floor(n[0] / 2)
            if (half === 1) {
                const t = [half, ...n]
                result.push(t)
                return
            }
            for (let j = half; j >= 1; j --) {
                let f = [j, ...n]
                result.push(f)
                makeSequences(f)
            }
        }
    }
    return result.length
}
