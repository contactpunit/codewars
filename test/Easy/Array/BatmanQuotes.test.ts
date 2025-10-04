import { describe, it, expect } from 'vitest'
import { getQuote } from '../../../Easy/Array/BatmanQuotes'

describe('getQuote() test suite', () => {
    let quotes = ["WHERE IS SHE?!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"]
    it.each([
        [quotes, "Rob1n", "Robin: Holy haberdashery, Batman!"],
        [quotes, "Joke2", "Joker: Let's put a smile on that faaaceee!"],
        [quotes, "Batm0n", "Batman: WHERE IS SHE?!"]
    ])("%s total candles of string %s", (total, input, result) => {
        expect(getQuote(total, input)).toBe(result)
    })
})
