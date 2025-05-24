import { describe, it, expect } from 'vitest'
import { cubeOdd } from '../../../Easy/Array/CubingNumbers';

describe('cubeOdd() test suite', () => {
    it.each([
        // [[1, 2, 3, 4], 28],
        // [[-3, -2, 2, 3], 0],
        [["a", 12, 9, "z", 42], undefined]
    ])('%s input array %s will result in %s', (input, result) => {
        expect(cubeOdd(input)).toBe(result)
    })
})