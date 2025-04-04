// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all 
// possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

export function scrollingText(text){
    return text.split('').map((_, idx) => text.slice(idx, text.length).concat(text.slice(0, idx)).toUpperCase())
}