import { describe, it, expect } from 'vitest'
import { spoonerize } from '../../../Easy/Array/SpoonerizeMe'

describe('spoonerize() test suite', () => {
    it.each([
        ["nit picking", "pit nicking"],
        ["wedding bells", "bedding wells"],
        ["jelly beans", "belly jeans"]
    ])('check if input %s has o/p of %s', (input, result) => {
        expect(spoonerize(input)).toBe(result)
    })
})