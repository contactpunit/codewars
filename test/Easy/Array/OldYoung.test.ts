import { describe, it, expect } from 'vitest'
import { differenceInAges } from '../../../Easy/Array/OldYoung'

describe('differenceInAges test suite', () => {
    it.each([
        [[82, 15, 6, 38, 35], [6, 82, 76]],
        [[57, 99, 14, 32], [14, 99, 85]]
        // [[ 1, 1, 1, 1, 1 ], 5]
    ])('should test if %s array results in %s', (input, actual) => {
        expect(differenceInAges(input)).toEqual(actual)
    })

})