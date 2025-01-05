import {describe, it, expect} from 'vitest'
import { distancesFromAverage } from '../../../Easy/Array/DistanceAverage'

describe('distancesFromAverage() test suite', () => {
    it.each([
        [[55, 95, 62, 36, 48], [4.2, -35.8, -2.8, 23.2, 11.2]],
        [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
        [[1, -1, 1, -1, 1, -1], [-1.0, 1.0, -1.0, 1.0, -1.0, 1.0]],
        [[1, -1, 1, -1, 1], [-0.8, 1.2, -0.8, 1.2, -0.8]],
        [[2, -2], [-2.0, 2.0]],
        [[1], [0]],
        [[123, -65, 32432, -353, -534], [6197.6, 6385.6, -26111.4, 6673.6, 6854.6]]
    ])('%s input %s to give diference of %s', (input, result) => {
        expect(distancesFromAverage(input)).toEqual(result)
    })
})