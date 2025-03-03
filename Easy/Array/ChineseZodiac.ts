// Task
// Given a year, return the element and animal that year represents("Element Animal").For example I'm born in 1998 so I'm an "Earth Tiger".

//     animals(or $animals in Ruby) is a preloaded array containing the animals in order:

// ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]

// elements(or $elements in Ruby) is a preloaded array containing the elements in order:

// ["Wood", "Fire", "Earth", "Metal", "Water"]

// Tell me your zodiac sign and element in the comments.Happy coding:)

const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"]
const elements = ["Wood", "Fire", "Earth", "Metal", "Water"]

export function chineseZodiac(year) {
    const animalIdx = (year - 1924) % 12
    const elementIdx = (Math.trunc((year - 1924) / 2)) % 5
    return elements[elementIdx] + ' ' + animals[animalIdx]
}