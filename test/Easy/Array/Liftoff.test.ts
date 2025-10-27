import { describe, it, expect } from 'vitest'
import { liftoff } from '../../../Easy/Array/Liftoff'

describe('liftoff() test suite', () => {
    it.each([
        [[2, 8, 10, 9, 1, 3, 4, 7, 6, 5], "10 9 8 7 6 5 4 3 2 1 liftoff!"],
        [[1, 2, 4, 3, 5], "5 4 3 2 1 liftoff!"]
    ])('for input %s the result is %s', (input, result) => {
        expect(liftoff(input)).toBe(result)
    })
})