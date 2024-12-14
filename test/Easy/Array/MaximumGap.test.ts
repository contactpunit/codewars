import {describe, it, expect} from 'vitest'
import { maxGap } from '../../../Easy/Array/MaximumGap'

describe('maxGap() test suite', () => {
    it.each([
        [[13,10,2,9,5],4],
        [[13,3,5],8],
        [[24,299,131,14,26,25],168],
        [[-3,-27,-4,-2],23],
        [[-7,-42,-809,-14,-12],767],
        [[12,-5,-7,0,290],278],
        [[-54,37,0,64,-15,640,0],576],
        [[130,30,50],80],
        [[1,1,1],0],
        [[-1,-1,-1],0]
    ])('array %s has maximum gap of %s', (input, gap) => {
        expect(maxGap(input)).toBe(gap)
    })
})