// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between 
// each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

export function insertDash(num) {
    return num.toString().split('').reduce((acc, curr, idx, arr) => {
        if (arr[idx] % 2 !== 0 && arr[idx + 1] % 2 !== 0 && arr[idx + 1]) {
            acc += `${curr}-`
            return acc
        } else {
            acc += curr
            return acc
        }
    }, '')
 }