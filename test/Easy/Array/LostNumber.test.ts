import {describe, it, expect} from 'vitest'
import { findDeletedNumber } from '../../../Easy/Array/LostNumber'

describe('findDeletedNumber test suite', () => {
    it.each([
        [[1,2,3,4,5], [3,4,1,5], 2],
        [[1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8], 5],
        [[1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3], 0]
    ])('input %s with mixedArray %s has deletd item %s', (input, mixedArr, result) => {
        expect(findDeletedNumber(input, mixedArr)).toBe(result)
    })
})