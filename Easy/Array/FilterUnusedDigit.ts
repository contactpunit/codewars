// Given a varying number of integer arguments, return the digits that are not present in any of them.

//     Example:

// [12, 34, 56, 78]  => "09"
// [2015, 8, 26]     => "3479"
// Note: the digits in the resulting string should be sorted.

export function unusedDigits(num) {
    const allDigitArray = Array.from(Array(10).keys())
    const res = num.reduce((acc, curr) => {
        const temp = curr.toString().split('').map(e => +e)
        acc.push(...temp)
        return acc
    }, [])
    const filtered = [... new Set(res)]
    const required = allDigitArray.filter(e => !filtered.includes(e))
    return required.join('')



}