import { it, describe, expect } from 'vitest'
import { minMinMax } from '../../../Easy/Array/MinMaxMin'

describe('minMinMax test suite()', () => {
    it.each([
        [[-1, 4, 5, -23, 24], [-23, -22, 24]],
        [[1, 3, -3, -2, 8, -1], [-3, 0, 8]],
        [[2, -4, 8, -5, 9, 7], [-5, -3, 9]]
    ])('%s input returns %s', (input, output) => {
        expect(minMinMax(input)).toEqual(output)
    })
})