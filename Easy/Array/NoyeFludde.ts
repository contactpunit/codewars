// There is a man, and there is a boat, and there are a lot of animals.

// This man wants to get his animals onto the boat, but only in pairs, and in alphabetical order. If there are any excess animals they are to be cruelly abandoned. He has developed a helpful to code to make life easier, where animals are referred to by the first letter of their name. Unfortunately there are more than 26 animals, for example there are 'g' - Gerbils and 'G' - Giraffes. These are very different animals and if they got mixed up it could be a disaster!

// The animals are currently in a long and disorganised queue. like so ['g','p','h','g','c','c'] In this case we can see that there are two gerbils, one pelican, one hamster, and two cats. They are out of order.

// Your job is arrange the animals into pairs like so [[‘c','c'],['g','g']] remember that animals are case sensitive! And for everyone’s convenience we want the bigger animals to come before smaller animals that occupy the same place in the alphabet. Giraffes before gerbils! alsoo please note we only want one pair of each animal, boat space is limited

// Oh and one last thing, there are rumours of sneaky numbers trying to get on board.

// Don't let any numbers onto the boat!!

export function boatLoader(a) {
    const strs = a.filter(a => isNaN(a))
    strs.sort((b, c) => b.toLowerCase() === c.toLowerCase() ? c.localeCompare(b) : b.toLowerCase().localeCompare(c.toLowerCase()))
    const result = strs.reduce((acc, curr, i) => (!i || acc[acc.length - 1][0] !== curr ? acc.push([curr]) : acc[acc.length - 1].length < 2 && acc[acc.length - 1].push(curr), acc), [])
    return result.filter(r => r.length === 2)
}