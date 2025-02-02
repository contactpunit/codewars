import { describe, it, expect } from 'vitest'
import { productArray } from '../../../Easy/Array/ProductArray'

describe('productArray() test suite', () => {
    it.each([
        [[12,20], [20,12]],
        [[3,27,4,2], [216,24,162,324]],
        [[13,10,5,2,9], [900,1170,2340,5850,1300]],
        [[16,17,4,3,5,2], [2040,1920,8160,10880,6528,16320]]
    ])('input %s results in %s', (input1, result) => {
        expect(productArray(input1)).toEqual(result)
    })
})