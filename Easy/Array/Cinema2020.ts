export function maximumSeating(seats) {
    let maxCount = 0
    for (let i = 0; i < seats.length; i++) {
        let left2 = seats[i - 2] || 0
        let left1 = seats[i - 1] || 0
        let right1 = seats[i + 1] || 0
        let right2 = seats[i + 2] || 0
        if (left2 === 0 && left1 === 0 && right1 === 0 && right2 === 0 && seats[i] === 0) {
            maxCount += 1
            seats[i] = 1
        }
    }
    return maxCount
}