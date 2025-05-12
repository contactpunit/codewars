import { describe, it, expect } from 'vitest'
import { evenChars } from '../../../Easy/Array/ReturnEvenChars'

describe('evenChars() test suite', () => {
    it.each([
        ["1234", ["2", "4"]],
        [";;;--", [";", "-"]],
        ["abcdefghijklm", ["b", "d", "f", "h", "j", "l"]],
        ["aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva", "invalid string"],
        ["a", "invalid string"]
    ])('evenChars %s returns %s', (input, result) => {
        expect(evenChars(input)).toEqual(result)
    })
})