// Batman & Robin have gotten into quite a pickle this time.The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a digit.They need help getting things back in order.

// Implement the function which takes in an array of quotes, and a string comprised of letters and a single digit(e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

// Return the quote along with the character who said it:

// quotes = [
//     "I am vengeance. I am the night. I am Batman!",
//     "Holy haberdashery, Batman!",
//     "Let's put a smile on that faaaceee!"
// ]
// hero = "Rob1n"

// Should output => "Robin: Holy haberdashery, Batman!"
// You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string.The quotes either belong to "Batman", "Robin", or "Joker".

export function getQuote(quotes, hero) {
    const isMatch = hero.match(/\D*(\d)\D*/)
    if (isMatch) {
        const idx = isMatch[1]
        if (hero.startsWith('R')) return `Robin: ${quotes[idx]}`
        else if (hero.startsWith('B')) return `Batman: ${quotes[idx]}`
        else return `Joker: ${quotes[idx]}`
    }
}