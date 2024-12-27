// DESCRIPTION:
// Create a function (a method in Ruby, an extension method in C#) every which returns every nth element of an array.

// Usage
// With one argument, every(array) returns every element of the array.

// With two arguments, every(array, interval) it returns every intervalth element.

// With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

// Examples
// every([0,1,2,3,4])     -> [0,1,2,3,4]
// every([0,1,2,3,4],1)   -> [0,1,2,3,4]
// every([0,1,2,3,4],2)   -> [0,2,4]
// every([0,1,2,3,4],3)   -> [0,3]
// every([0,1,2,3,4],3,1) -> [1,4]

export function checkevery(arr, interval = 1, start = 0){
    return arr.filter((_, idx) => {
        if (idx === start || (idx - start >= 0 && (idx - start) % interval === 0)) {
            return true
        }
    })
}
