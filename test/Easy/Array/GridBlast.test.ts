import {it, describe, expect} from 'vitest'
import { Histogram } from '../../../Easy/Array/HistogramData'
import { fire } from '../../../Easy/Array/GridBlast'

describe('fire test suite()', () => {

    it.each([
        [0, 0, 'top left'],
        [1, 2, 'bottom middle']
    ])('x %s and y %s is %s', (x, y, result) => {
        expect(fire(x, y)).toEqual(result)

    })
})