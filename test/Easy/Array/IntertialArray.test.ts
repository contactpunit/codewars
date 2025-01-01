import {it, describe, expect} from 'vitest'
import { isInertial } from '../../../Easy/Array/InertialArray'

describe('isInertial test suite()', () => {
    it.each([
        [[11, 4, 20, 9, 2, 8],true],
        [[
            -157,  185,  182,
             360, -544,  450,
            -358,   -9, -170
          ], false],
          [[ 440, -458, 286 ], false],
          [[ -114, -325, 302, -144 ], false],
        //   [[
        //     0, 2, 3,  4,  5,  6,
        //     7, 8, 9, 10, 12, 15,
        //    16
        //  ], true],
         [[ 0, 2, 4, 8 ], false]
    ])('%s input array result in %s', (input, output) => {
        expect(isInertial(input)).toBe(output)
    })
})