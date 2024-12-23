// DESCRIPTION:
// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

export function arrange(arr) {
    arr.sort((a, b) => {
        if( a.match(/\D+/)[0] > b.match(/\D+/)[0]) {
            return 1
        } else if (a.match(/\D+/)[0] < b.match(/\D+/)[0]) {
            return -1
        } else {
            if (+a.match(/\d+/)[0] < +b.match(/\d+/)[0]) return -1
            else if (+a.match(/\d+/)[0] > +b.match(/\d+/)[0]) return 1
            else return 0
        }
    })
    return arr
}