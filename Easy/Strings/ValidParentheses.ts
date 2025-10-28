// Description:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters(and).
// Empty strings are considered balanced(and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

export function validParentheses(parenStr) {
    const params = parenStr.split('')
    let start = 0
    let end = 0
    for (const param of params) {
        if (param === '(') {
            start += 1
        } else if (param === ')') {
            end += 1
            if (end > start) return false
        }
    }
    if (end !== start) return false
    else return true
}