import { describe, it, expect } from 'vitest'
import { isNice } from '../../../Easy/Array/NiceArray'

describe('NiceArray test suite', () => {
    it('should test if array is nice', () => {
        const input = [2,10,9,3]
        const actual = isNice(input)
        expect(actual).toBe(true)
    })

    it('should test if array is not nce', () => {
        const input = [3,4,5,7]
        const actual = isNice(input)
        expect(actual).toBe(false)
    })
})