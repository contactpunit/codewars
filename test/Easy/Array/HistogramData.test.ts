import {it, describe, expect} from 'vitest'
import { Histogram } from '../../../Easy/Array/HistogramData'

describe('Histogram test suite()', () => {
    const data = [1, 1, 0, 1, 3, 2, 6]
    it.each([
        [data, 1, [1, 3, 1, 1, 0, 0, 1]],
        [data, 2, [4, 2, 0, 1]]
    ])('%s input array and width %s result in %s', (input, width, output) => {
        expect(Histogram(input, width)).toEqual(output)

    })
})