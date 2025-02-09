import { it, describe, expect } from 'vitest'
import { averageLength } from '../../../Easy/Array/AverageLength'

describe('averageLength test suite()', () => {
    it.each([
        [['u', 'y'], ['u', 'y']],
        [['aa', 'bbb', 'cccc'], ['aaa', 'bbb', 'ccc']],
        [['aa', 'bb', 'ddd', 'eee'], ['aaa', 'bbb', 'ddd', 'eee']]
    ])('%s input array result to %s', (input, output) => {
        expect(averageLength(input)).toEqual(output)

    })
})