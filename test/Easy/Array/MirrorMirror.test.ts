import { it, describe, expect } from 'vitest'
import { mirror } from '../../../Easy/Array/MirrorMirror'

describe('mirror test suite()', () => {
    it.each([
        [[], []],
        [[1], [1]],
        [[2, 1], [1, 2, 1]],
        [[2, 3, 1], [1, 2, 3, 2, 1]],
        [[-8, 42, 18, 0, -16], [-16, -8, 0, 18, 42, 18, 0, -8, -16]],
    ])('%s input returns %s', (input, output) => {
        expect(mirror(input)).toEqual(output)
    })
})