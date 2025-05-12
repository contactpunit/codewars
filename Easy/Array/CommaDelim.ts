// Description:
// Input: Array of elements

// ["h", "o", "l", "a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕

export function printArray(array) {
    let result: any = []
    for (const el of array) {
        if (Array.isArray(el)) result.push(el.join(','))
        else result.push(el)
    }
    return result.join(',')
}