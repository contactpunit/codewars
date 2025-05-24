import { describe, it, expect } from 'vitest'
import { pendulum } from '../../../Easy/Array/PoetAndPendulum'

describe('pendulum() test suite', () => {
    it.each([
        [[4, 10, 9], [10, 4, 9]],
        [[8, 7, 10, 3], [8, 3, 7, 10]],
        [[6, 6, 8, 5, 10], [10, 6, 5, 6, 8]],
        [[4, 6, 8, 7, 5], [8, 6, 4, 5, 7]],
        [[9, 4, 6, 4, 10, 5], [9, 5, 4, 4, 6, 10]],
        [[10, 5, 6, 10], [10, 5, 6, 10]],
        [[11, 12, 12], [12, 11, 12]]
    ])('input array %s result is %s', (input, result) => {
        expect(pendulum(input)).toEqual(result)
    })
})
