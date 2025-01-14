import {it, describe, expect} from 'vitest'
import { findDup } from '../../../Easy/Array/DuplicateNumber'

describe('findDup test suite()', () => {
    it.each([
        [[1,2,2,3], 2],
        [[1,3,2,5,4,5,7,6], 5]
    ])('%s input array and width %s result in %s', (input, output) => {
        expect(findDup(input)).toBe(output)

    })
})