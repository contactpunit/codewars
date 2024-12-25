import {it, describe, expect} from 'vitest'
import { alphaSeq } from '../../../Easy/Array/AlphabeticalSequence'
import { mispelled } from '../../../Easy/Array/MispelledWord'

describe('mispelled test suite()', () => {
    it.each([
        ['versed', 'xersed', true],
        ['versed', 'applb', false],
        ['versed', 'v5rsed', true],
        ['1versed', 'versed', true],
        ['versed', 'versed1', true],
        ['aaversed', 'versed', false],
        ['versed', 'aversed', true]
    ])('%s input returns %s', (input1, input2, output) => {
        expect(mispelled(input1, input2)).toBe(output)
    })
})