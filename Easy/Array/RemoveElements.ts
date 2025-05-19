// Description:
// Take an array and remove every second element from the array.Always keep the first element and start removing with the next element.

//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

export function removeEveryOther(arr) {
    const result = arr.reduce((acc, curr, idx) => {
        if ((idx % 2) === 0) acc.push(curr)
        return acc
    }, [])
    return result
}