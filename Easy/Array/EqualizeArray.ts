// No description!!!

// Input :: [10,20,25,0]

// Output :: ["+0", "+10", "+15", "-10"]

export function equalize(array){
    return array.map(e => (e - array[0]) >= 0 ? `+${e - array[0]}` : `${e - array[0]}`)
}