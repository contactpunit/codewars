import { describe, it, expect } from 'vitest'
import { getVillainName } from '../../../Easy/Array/VillianName';

describe('getVillainName() test suite', () => {
    it.each([
        ["May 3", "The Despicable Raisin"],
        ["December 17", "The Awkward House Cat"],
        ["November 18", "The Terrifying Teaspoon"]
    ])('%s input will result in %s', (input, result) => {
        expect(getVillainName(input)).toBe(result)
    })
})