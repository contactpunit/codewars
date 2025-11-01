// Find the difference between two collections.The difference means that either the element is present in one collection or it is present in other, but not in both.Return a sorted list with the difference.

// The collections can contain duplicates; the difference should not contain duplicates.

//     Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]

export function diff(a, b) {
    const adiff = a.filter(e => !b.includes(e))
    const bdiff = b.filter(e => !a.includes(e))
    return [... new Set(adiff.concat(bdiff))].sort((x, y) => x.localeCompare(y))
}