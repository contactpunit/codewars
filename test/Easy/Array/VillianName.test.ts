import { describe, it, expect } from 'vitest'
import { getVillainName } from '../../../Easy/Array/VillianName';

describe('getVillainName() test suite', () => {
    it.each([
        [new Date("May 3"), "The Despicable Raisin"],
        [new Date("December 17"), "The Awkward House Cat"],
        [new Date("November 18"), "The Terrifying Teaspoon"]
    ])('%s input will result in %s', (input, result) => {
        expect(getVillainName(input)).toBe(result)
    })
})