import { describe, it, expect } from 'vitest'
import { flyBy } from '../../../Easy/Array/DroneFlyby'

describe('flyBy() test suite', () => {
    it.each([
        ['xxxxxx', '====T', 'ooooox'],
        ['xxxxxxxxx', '==T', 'oooxxxxxx'],
        ['xxxxxxxxxxxxxxx', '=========T', 'ooooooooooxxxxx'],
        ['xxxxxxxxxxxxx', '=============T', 'ooooooooooooo']
    ])('lamps %s and drone %s returns at %s', (lamps, drones, result) => {
        expect(flyBy(lamps, drones)).toBe(result)
    } )
})