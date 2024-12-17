// Given a mixed array of number and string representations of integers, add up the non-string 
// integers and subtract the total of the string integers.

// Return as a number.


export function divCon(x){
    const result = x.reduce((acc, curr) => {
        if(typeof curr === 'string') {
            acc[0] += +curr
            return acc
        } else {
            acc[1] += curr
            return acc
        }
    }, [0, 0])
    return result[1] - result[0]
}