// Given a mixed array of number and string representations of integers, add up the non-string 
// integers and subtract the total of the string integers.

// Return as a number.

export function divCon(x){
    return x.reduce((acc, curr) => typeof curr === 'number' ? acc += curr : acc -= +curr, 0)
}