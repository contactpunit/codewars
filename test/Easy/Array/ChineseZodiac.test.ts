import { describe, it, expect } from 'vitest'
import { chineseZodiac } from '../../../Easy/Array/ChineseZodiac'

describe('chineseZodiac() test suite', () => {
    it.each([
        [1965, "Wood Snake"],
        [1938, "Earth Tiger"],
        [1998, "Earth Tiger"],
        [2016, "Fire Monkey"],
        [1924, "Wood Rat"],
        [1968, "Earth Monkey"],
        [2162, "Water Dog"]
    ])('year %s is %s', (year, result) => {
        expect(chineseZodiac(year)).toBe(result)
    })
})