// Description:
// You are given an initial 2 - value array(x).You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two.If only one is a number, the score is that number.If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays.Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
export function explode(x) {
    let times = 0
    if (!Number.isInteger(x[0]) && !Number.isInteger(x[1])) return 'Void!'
    if (Number.isInteger(x[0])) times = x[0]
    if (Number.isInteger(x[1])) times += x[1]
    if (times === 0) return []
    else return Array(times).fill(x)
}