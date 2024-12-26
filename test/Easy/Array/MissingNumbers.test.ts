import { describe, it, expect } from 'vitest'
import { findMissingNumbers } from '../../../Easy/Array/MissingNumbers'

describe('findMissingNumbers test suite', () => {
    it.each([
        [[-3,-2,1,4], [-1,0,2,3]],
        [[-1,0,1,2,3,4], []],
        [[], []]
    ])('should test if %s array has missing %s', (input, actual) => {
        expect(findMissingNumbers(input)).toEqual(actual)
    })

})