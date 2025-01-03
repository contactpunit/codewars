// While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

// So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

// If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

// If string contains 4 numbers but not consecutive it returns "not consecutive".
export function checkRoot(string) {
    const parts = string.split(',').map(e => +e)
    if (parts.some(e => isNaN(e))) return 'incorrect input'
    if (parts.length !== 4) return "incorrect input"
    if (parts.some((e, i) => i > 0 && parts[i - 1] + 1 !== parts[i])) return 'not consecutive'
    const res = parts.reduce((acc, curr) => acc *=curr, 1) +  1
    return `${res}, ${Math.sqrt(res)}`
}