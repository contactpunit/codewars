// DESCRIPTION:
// A pernicious number is a positive integer whose binary digit sum (or Hamming weight) is a prime number.

// 25 = 11001  -->  digit sum = 3 --> 3 is prime --> therefore 25 is a pernicious number 

// 75 = 1001011  -->  digit sum = 4 --> 4 is not prime --> therefore 75 is not a pernicious number
// #Task

// Your job is to create a function that will list all of the pernicious numbers up to the given value (inclusive). The values given will increase in size, meaning the list will be very large.

// For example:

// pernicious(5) should return [3, 5]

// pernicious(12) should return [3, 5, 6, 7, 9, 10, 11, 12]

// If there are no pernicious numbers in the given range, your function should return "No pernicious numbers". This means when given a negative value, it should still recieve this output.

// pernicious(0) should return "No pernicious numbers"

// pernicious(-1) should return "No pernicious numbers"

// Also, if given a floating point number, return the list of pernicious numbers with the number floored (rounded down).

// pernicious(17.546456) should return [3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17]

// You will only be given integers and floats.

// Remember:

// 1 is not a prime number and 2 is a prime number.

export function pernicious(n) {
    if (n < 0) return "No pernicious numbers"
    const nums = Array.from({length: n}, (v, i) => i + 1)
    const binArray = nums.map(e => (e >>> 0).toString(2))
    const sumTot: number[] = binArray.map(e => e.split('').reduce((acc, curr) => acc += +curr, 0))
    const result =  sumTot.reduce((acc: number[], curr, i) => {
        if (isPrime(curr)) acc.push(nums[i])
        return acc
    }, [])
    if(!result.length) return "No pernicious numbers"
    return result
}

function isPrime(n) {
    if (n <= 1)
        return false
    // Check if n=2 or n=3
    if (n == 2 || n == 3)
        return true
    // Check whether n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0)
        return false
    // Check from 5 to square root of n
    // Iterate i by (i+6)
    for (let i = 5; i <= Math.sqrt(n); i = i + 6) 
        if (n % i == 0 || n % (i + 2) == 0) 
            return false
    return true
}