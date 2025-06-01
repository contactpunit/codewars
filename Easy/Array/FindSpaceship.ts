// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac.Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair.Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to its location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines.The bottom left of the map is[0, 0].X is ALF's spaceship.

// In this example:

// findSpaceship(map) => [7, 2]
// If you cannot find the spaceship, the result should be



export function findSpaceship(map) {
    let row = 0
    if (map) {
        const lines = map.split('\n')
        for (const line of lines) {
            row += 1
            if (line.split('').includes('X')) {
                const xPoint = line.split('').findIndex(e => e === 'X')
                if (xPoint !== -1) return [xPoint, lines.length - row]
            }
        }
        return 'Spaceship lost forever.'
    }
    return 'Spaceship lost forever.'
}