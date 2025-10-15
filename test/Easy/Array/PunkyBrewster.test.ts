import { describe, it, expect } from 'vitest'
import { getSocks } from '../../../Easy/Array/PunkyBrewster'

describe('getSocks() test suite', () => {
    it.each([
        ['Punky', ['red', 'blue', 'blue', 'green'], ['blue', 'green']],
    ])('input %s and %s returns %s', (name, input, result) => {
        expect(getSocks(name, input)).toEqual(result)
        expect(result[0]).not.toBe(result[1]);
    })
})