// ESCRIPTION:
// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

export function findMissingNumbers(arr) {
    return arr.reduce((acc, curr, idx) => {
        if (idx !== 0) {
            if (curr - arr[idx - 1] !== 1) {
                let j = 1
                while(arr[idx - 1] + j < curr) {
                    acc.push(arr[idx - 1] + j)
                    j += 1
                }
            }
        }
        return acc
    }, [])
}