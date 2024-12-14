import {describe, it, expect} from 'vitest'
import { save } from '../../../Easy/Array/ComputerProblem1'

describe('save() test suite', () => {
    it.each([
        [[4, 4, 4, 3, 3], 12, 3],
        [[4, 4, 4, 3, 3], 11, 2],
        [[4, 8, 15, 16, 23, 42], 108, 6],
        [[13], 13, 1],
        [[1, 2, 3, 4], 250, 4],
        [[100], 500, 1]
    ])('%s input can accomodate for total %s only %s result files', (input, total, result) => {
        expect(save(input, total)).toBe(result)
    })
})