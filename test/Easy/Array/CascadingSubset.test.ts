import {describe, it, expect } from 'vitest'
import { eachCons } from '../../../Easy/Array/CascadingSubset'

describe('eachCons cascading subset test suite', () => {
    it.each([
        [[3, 5, 8, 13], 1, [[3], [5], [8], [13]]],
        [[3, 5, 8, 13], 2, [[3,5], [5,8], [8,13]]]
    ])('subset of %s with collection of %s elem matches %s', (inpArray, num, result) => {
        expect(eachCons(inpArray, num)).toEqual(expect.arrayContaining(result))
    })
})