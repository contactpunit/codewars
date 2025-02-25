// Description:
// Your goal is to implement the method meanVsMedian which accepts an odd - length array of integers and returns one of the following:

// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value
// Reminder: Median

// Array will always be valid(odd - length >= 3)

export function meanVsMedian(numbers) {
    const mean = numbers.reduce((acc, cur) => acc += cur, 0) / numbers.length
    numbers.sort((a, b) => a - b)
    const median = numbers[(numbers.length - 1) / 2]
    return mean > median ? 'mean' : mean === median ? 'same' : 'median'
}