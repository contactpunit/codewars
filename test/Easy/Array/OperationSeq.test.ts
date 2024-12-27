import { describe, it, expect } from 'vitest'
import { calc } from '../../../Easy/Array/OperationSeq'

describe('calc test suite', () => {
    it.each([
        [[ 0, 2, 1, -6, -3, 3 ], 31],
        // [[ 0 ], 0],
        // [[ 1, 1, 1, 1, 1 ], 5]
    ])('should test if %s array results in %s', (input, actual) => {
        expect(calc(input)).toBe(actual)
    })

})