import { it, describe, expect } from 'vitest'
import { newAvg } from '../../../Easy/Array/Benefactor'

describe('newAvg test suite()', () => {
    it.each([
        [[14, 30, 5, 7, 9, 11, 16], 90, 628],
        [[14, 30, 5, 7, 9, 11, 15], 92, 645]
    ])('%s input returns %s', (input, newavg, output) => {
        expect(newAvg(input, newavg)).toBe(output)
    })
})