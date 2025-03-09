import { describe, it, expect } from 'vitest'
import { keysAndValues } from '../../../Easy/Array/KeyValueArray'

describe('keysAndValues test suite', () => {
    it.each([
        [{ a: 1, b: 2, c: 3 }, [['a', 'b', 'c'], [1, 2, 3]]],
        [{}, [[], []]],
        [{ 1: 'a', 2: 'b', 3: 'c' }, [['1', '2', '3'], ['a', 'b', 'c']]]
    ])('input %s produces output %s', (input, result) => {
        expect(keysAndValues(input)).toEqual(result)
    })
})