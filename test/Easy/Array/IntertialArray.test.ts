import {it, describe, expect} from 'vitest'
import { isInertial } from '../../../Easy/Array/InertialArray'

describe('isInertial test suite()', () => {
    it.each([
        [[11, 4, 20, 9, 2, 8],true]
    ])('%s input array result in %s', (input, output) => {
        expect(isInertial(input)).toBe(output)
    })
})