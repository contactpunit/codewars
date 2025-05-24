// Find the sum of the odd numbers within an array, after cubing the initial integers.The function should return undefined if any of the values aren't numbers.
export function cubeOdd(arr) {
    let sum = 0
    for (const a of arr) {
        if (!Number.isInteger(a)) return undefined
        if ((a % 2) !== 0) sum += a ** 3
    }
    return sum
}