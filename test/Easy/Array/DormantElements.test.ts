import { describe, it, expect } from 'vitest'
import { solve } from '../../../Easy/Array/DormantElements'

describe('solve() test suite', () => {
    it.each([
        // [[16, 17, 14, 3, 14, 5, 2], [17, 14, 5, 2]],
        // [[92, 52, 93, 31, 89, 87, 77, 105], [105]],
        // [[75, 47, 42, 56, 13, 55], [75, 56, 55]],
        // [[67, 54, 27, 85, 66, 88, 31, 24, 49], [88, 49]],
        // [[76, 17, 25, 36, 29], [76, 36, 29]],
        [[104, 18, 37, 9, 36, 47, 28], [104, 47, 28]]
    ])('input array %s result is %s', (input, result) => {
        expect(solve(input)).toEqual(result)
    })
})
