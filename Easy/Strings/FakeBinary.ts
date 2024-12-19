// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and 
// above with '1'. Return the resulting string.

// Note: input will never be an empty string

export function fakeBin(x){
    return x.split('').reduce((acc, curr) => {
        if (+curr < 5) {
            acc += '0'
        } else {
            acc += '1'
        }
        return acc
    }, '')
}