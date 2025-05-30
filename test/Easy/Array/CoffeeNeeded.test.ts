import { describe, it, expect } from 'vitest'
import { howMuchCoffee } from '../../../Easy/Array/CoffeeNeeded'

describe('howMuchCoffee suite', () => {
    it.each([
        [['cw'], 1],
        [['CW'], 2],
        [['cw', 'CAT'], 3],
        [['cw', 'CAT', 'DOG'], 'You need extra sleep'],
        [['cw', 'CAT', 'cw=others'], 3]
    ])("input %s return %s", (input, result) => {
        expect(howMuchCoffee(input)).toBe(result)
    })
})