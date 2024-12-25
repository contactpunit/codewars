import {it, describe, expect} from 'vitest'
import { checkRoot } from '../../../Easy/Array/AlwaysPerfect'

describe('arrayMash test suite()', () => {
    it.each([
        ['4,5,6,7', '841, 29'],
        ['3,s,5,6', 'incorrect input'],
        ['11,13,14,15', 'not consecutive']
    ])('%s input array has leaders as %s', (input1, output) => {
        expect(checkRoot(input1)).toBe(output)

    })
})