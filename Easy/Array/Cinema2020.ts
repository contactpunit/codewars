export function maximumSeating(seats) {
    let i = 0
    let pos = null
    let count = 0
    let maxCounts = 0
    while (i <= seats.length - 1) {
        if (seats[i] === 0) {
            count += 1
            if (i === 0 || i === seats.length - 1) pos = 'diff'
        } else {
            // if pos is start
            if (pos === 'diff') {
                maxCounts += Math.trunc(count / 3)
                pos = null
            } else {
                // if pos is not start

            }
        }
        i += 1
    }
    if (count > 0) {
        if (pos === 'start') maxCounts += Math.trunc(count / 3) + 1
        else maxCounts += Math.trunc(count / 3)
    }
    console.log(maxCounts)
}

maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])
maximumSeating([0, 0, 0, 0])
maximumSeating([1, 0, 0, 0, 0, 0, 1])