import {it, describe, expect} from 'vitest'
import { arrayLeaders } from '../../../Easy/Array/ArrayLeaders'

describe('arrayLeaders test suite()', () => {
    it.each([
        [[1,2,3,4,0], [4]],
        [[16,17,4,3,5,2], [17,5,2]],
        [[-1,-29,-26,-2], [-1]],
        [[-36,-12,-27], [-36,-12]],
        [[0,-1,-29,3,2], [0,-1,3,2]]
    ])('%s input array has leaders as %s', (input, leaders) => {
        expect(arrayLeaders(input)).toEqual(leaders)

    })
})