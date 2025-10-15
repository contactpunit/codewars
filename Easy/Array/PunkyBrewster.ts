// Description:
// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

//     Example:

// getSocks('Punky', ['red', 'blue', 'blue', 'green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist.Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

export function getSocks(name, socks) {
    socks.sort((a, b) => a.localeCompare(b))
    if (socks.length < 2) return []
    if (name === 'Punky') {
        for (const sock of socks.slice(1)) {
            if (sock !== socks[0]) return [socks[0], sock]
        }
        return []
    } else if (name === 'Henry') {
        let match = socks[0]
        for (const sock of socks.slice(1)) {
            if (sock === match) return [sock, sock]
            else {
                match = sock
            }
        }
        return []
    }
}
