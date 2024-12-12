import {expect, describe, it} from 'vitest'
import { consecutive } from '../../../Easy/Array/ConsecutiveNumbersNeeded'

describe('consecutive numbers needed test suite', () => {
    it.each([
        [[1, 2, 3, 4], 0],
        [[4, 8, 6], 2],
        [[], 0],
        [[1], 0]
    ])(
        'should cause array %s to be consecutive using %s etra numbers', (input, num) => {
            const result = consecutive(input)
            expect(result).toBe(num)
        }
    )
})