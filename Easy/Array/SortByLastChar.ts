// Given a string of words (x), you need to return an array of the words, 
// sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the
//  order they appeared in the given string.

// All inputs will be valid.

export function last(x) {
    return x.split(' ').sort((a, b) => {
        if (a.slice(-1) > b.slice(-1)) return 1
        else if (a.slice(-1) < b.slice(-1)) return -1
        else return 0
    })
}