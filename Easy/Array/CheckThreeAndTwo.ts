// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, 
// Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

export function checkThreeAndTwo(array) {
    const charMap = {}
    array.forEach(element => charMap[element] = (charMap[element] || 0) + 1 )
    const values = Object.values(charMap)
    return values.includes(2) && values.includes(3)
    // if (Object.keys(charMap).length !== 2) return false
    // return Object.keys(charMap).every(e => charMap[e] >= 2)
}