import { describe, it, expect } from 'vitest'
import { sumDifferencesBetweenProductsAndLCMs } from '../../../Easy/Array/DiffLcmProduct'

describe('sumDifferencesBetweenProductsAndLCMs() test suite', () => {
    it.each([
        [[[15,18], [4,5], [12,60]],840],
        [[[1,1], [0,0], [13,91]],1092],
        [[[15,7], [4,5], [19,60]],0],
        [[[20,50], [10,10], [50,20]],1890],
        [[],0]
    ])('input %s results in %s', (input, result) => {
        expect(sumDifferencesBetweenProductsAndLCMs(input)).toBe(result)
    })
})