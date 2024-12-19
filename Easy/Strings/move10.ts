// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

export function moveTen(s){
    return s.split('').reduce((acc, curr) => {
        if(curr.charCodeAt(0) + 10 > 122) {
            acc += String.fromCharCode(curr.charCodeAt(0) + 10 - 122 + 96)
        } else {
            acc += String.fromCharCode(curr.charCodeAt(0) + 10)
        }
        return acc
    }, '')
}