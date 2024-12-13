// Given an array of numbers (in string format), you must return a string. 
// The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
// You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

export function switcher(x) {
    // take 123 as base
    return x.map(a => {
        if (a === '29') return ' '
        else if(a === '28') return '?'
        else if(a === '27') return '!'
        else return String.fromCharCode(123 - +a)
    }).join('')
    
}