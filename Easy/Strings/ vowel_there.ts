// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels 
// (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

export function isVow(a){
    const possible = ['a', 'e', 'i', 'o', 'u']
    return a.map(e => possible.includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e)
}