import {describe, it, expect} from 'vitest'
import { cake } from '../../../Easy/Array/Birthday1Cake'

describe('cake() test suite', () => {
    it.each([
        [900, 'abcdef', 'That was close!'],
        [56, 'ifkhchlhfd', 'Fire!'],
        [256, 'aaaaaddddr', 'Fire!']
    ])("%s total candles of string %s", (total, input, result) => {
        expect(cake(total, input)).toBe(result)
    })
})
