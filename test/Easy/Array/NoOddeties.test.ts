import { describe, it, expect } from 'vitest'
import { noOdds } from '../../../Easy/Array/NoOddeties'

describe('noOdds() test suite', () => {
    it.each([
        [[0, 1], [0]],
        [[0, 1, 2, 3], [0, 2]]
    ])('check if input %s has o/p of %s', (input, result) => {
        expect(noOdds(input)).toEqual(result)
    })
})