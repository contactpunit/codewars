import {describe, it, expect} from 'vitest'
import { switcher } from '../../../Easy/Array/NumberToLetters'

describe('switcher() test suite', () => {
    it.each([
        [['24', '12', '23', '22', '4', '26', '9', '8'], 'codewars'],
        [['25','7','8','4','14','23','8','25','23','29','16','16','4'], 'btswmdsbd kkw'],
        [['4', '24'], 'wc']
    ])('codes %s should generate string %s', (codes, result) => {
        const actual = switcher(codes)
        expect(actual).toBe(result)
    })
})