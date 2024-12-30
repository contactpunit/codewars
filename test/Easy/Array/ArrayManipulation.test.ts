import {it, describe, expect} from 'vitest'
import { arrayManip } from '../../../Easy/Array/ArrayManipulation'

describe('arrayManip test suite()', () => {
    it.each([
        [[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28], [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1]],
        [[ 2, 4, 18, 16, 7, 3, 9, 13, 18, 10 ], [3, 7, -1, 18, 9, 9, 10, 18, -1, -1]]
    ])('%s input array result to %s', (input, output) => {
        expect(arrayManip(input)).toEqual(output)

    })
})