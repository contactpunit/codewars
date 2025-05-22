import { it, describe, expect } from 'vitest'
import { Histogram } from '../../../Easy/Array/HistogramData'
import { head, init, last, tail } from '../../../Easy/Array/HeadTailInit'

describe('head tail init and last test suite()', () => {
    const data1 = [1, 2, 3, 4, 5]
    const data2 = [1]
    const data3 = [1, 5, 7, 9]
    const data4 = [7, 2]
    const data5 = [5, 1]
    it('%s input array result in %s', () => {
        expect(tail(data1)).toEqual([2, 3, 4, 5])
        expect(tail(data2)).toEqual([])
        expect(init(data3)).toEqual([1, 5, 7])
        expect(last(data4)).toEqual(2)
        expect(head(data5)).toEqual(5)

    })
})