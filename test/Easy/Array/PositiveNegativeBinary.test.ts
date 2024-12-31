import {it, describe, expect} from 'vitest'
import { positiveToNegative } from '../../../Easy/Array/PositiveNegativeBinary'

describe('positiveToNegative test suite()', () => {
    it.each([
        [[0, 1, 0, 0, 1], [1, 0, 1, 1, 1]],
        [[0, 0, 0, 0], [0, 0, 0, 0]],
        [[0, 0, 1, 0], [1, 1, 1, 0]],
        [[0, 0, 1, 1], [1, 1, 0, 1]],
        [[0, 1, 0, 0], [1, 1, 0, 0]]
    ])('%s input array and width %s result in %s', (input, output) => {
        expect(positiveToNegative(input)).toEqual(output)
    })
})