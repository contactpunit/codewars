// Write a function that merges two sorted arrays into a single one.The arrays only contain integers.Also, the final outcome must be sorted and not have any duplicate.

export function mergeArrays(a, b) {
    let i = 0
    let j = 0
    const merged: any = []
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            if (!merged.includes(a[i])) {
                merged.push(a[i])
            }
            i += 1
        } else if (a[i] > b[j]) {
            if (!merged.includes(b[j])) {
                merged.push(b[j])
            }
            j += 1
        } else {
            if (!merged.includes(a[i])) {
                merged.push(a[i])
            }
            i += 1
            j += 1
        }
    }
    if (i < a.length) {
        while (i < a.length) {
            if (merged[merged.length - 1] !== a[i]) {
                merged.push(a[i])
            }
            i += 1
        }
    }
    if (j < b.length) {
        while (j < b.length) {
            if (merged[merged.length - 1] !== b[j]) {
                merged.push(b[j])
            }
            j += 1
        }
    }
    return merged
}