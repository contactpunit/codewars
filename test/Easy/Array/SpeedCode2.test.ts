import { describe, it, expect } from 'vitest'
import { arrayMadness } from '../../../Easy/Array/SpeedCode2'

describe('arrayMadness() test suite', () => {
    it.each([
        [[4,5,6],[1,2,3], true],
        [[5,6,7],[4,5,6], false],
        [[4,5,6],[3,4,5], false],
        [[1,2,3],[0,1,2], true],
        [[5,3,2,4,1],[15], false],
        [[2,5,3,4,1],[3,3,3,3,3], false],
        [[1,3,5,2,4],[2,2,2,2,2,2,2,1], false],
        [[2,4,6,8,10,12,14],[1,3,5,7,9,11,13], false]
    ])('input %s and %s results in %s', (input1, input2, result) => {
        expect(arrayMadness(input1, input2)).toBe(result)
    })
})