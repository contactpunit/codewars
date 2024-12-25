// Transpose two strings in an array
// 873791% of 5511,942 of 3,000joeylouise
// JavaScript
// TRAINNEXT KATA
// Details
// Solutions
// Forks (8)
// Discourse (41)
// Collect|
// DESCRIPTION:
// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

export function transposeTwoStrings (array) {
    const count = array[0].length >= array[1].length ? array[0].length : array[1].length
    let result :string[] = []
    for (let i = 0; i <count; i++) {
        result.push(`${array[0][i] || ' '} ${array[1][i] || ' '}`)
    }
    return result.join('\n')
}