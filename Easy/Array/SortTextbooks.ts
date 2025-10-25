// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list(ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

export function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        const aSmall = a.toLowerCase()
        const bSmall = b.toLowerCase()
        if (aSmall[0] === bSmall[0]) return aSmall.localeCompare(bSmall)
        else return aSmall.charCodeAt(0) - bSmall.charCodeAt(0)
    })
}   