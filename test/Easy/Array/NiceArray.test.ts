import { describe, it, expect } from 'vitest'
import { isNice } from '../../../Easy/Array/NiceArray'

describe.only('NiceArray test suite', () => {
    it('should test if array is nice', () => {
        const input = [2,10,9,3]
        const actual = isNice(input)
        expect(actual).toBe(true)
    })

    it('should test if array is not nice', () => {
        const input = [3,4,5,7]
        const actual = isNice(input)
        expect(actual).toBe(false)
    })

    it('should test if array is not nice with single argument', () => {
        const input = [3]
        const actual = isNice(input)
        expect(actual).toBe(false)
    })

    it('should test if array is not nice with no argument', () => {
        const input = []
        const actual = isNice(input)
        expect(actual).toBe(false)
    })

    it('should test if array is nice', () => {
        const input = [1,2,3,4,5,1,2,2,5,4,3,2]
        const actual = isNice(input)
        expect(actual).toBe(true)
    })

})