// Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, 
// realise again just how little leg room you get, and sort of climb into the seat covered in a
//  pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

export function planeSeat(a){
    const seatNum = +a.match(/\d+/)[0]
    const seatCode = a[a.length - 1].charCodeAt(0)
    if (seatNum > 60 || seatNum < 1) return 'No Seat!!'
    if (seatCode > 90 || seatCode < 65 || seatCode === 73 || seatCode === 74) return 'No Seat!!'
    else {
        return `${seatNum < 21 ? 'Front-' : seatNum > 20 && seatNum < 40 ? 'Middle-' : 'Back-'}${seatCode < 68 && seatCode > 64 ? 'Left' : seatCode > 67 && seatCode < 71 ? 'Middle' : 'Right'}`
    }
}