// Given a sequence of integers, return the sum of all the integers that 
// have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

export function evenLast(numbers) {
    let total = 0
    for(let i = 0; i < numbers.length; i++) 
    {
        if(typeof numbers[i] === 'number' && 
        !isNaN(numbers[i]) && 
        i % 2 === 0) {
            total += numbers[i]
        }
    }
    return numbers.length > 0 ? total * numbers[numbers.length - 1] : 0
}