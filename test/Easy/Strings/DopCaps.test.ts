import { describe, it, expect } from 'vitest'
import { dropCap } from '../../../Easy/Strings/DropCaps'

describe('dropCap() test suite', () => {
    it.each([
        ['Apple Banana',"Apple Banana"],
        ['Apple',"Apple"],
        ['',""],
        ['of',"of"],
        ['Revelation of the contents outraged American public opinion, and helped generate',"Revelation of The Contents Outraged American Public Opinion, And Helped Generate"],
        ['more  than    one space between words',"More  Than    One Space Between Words"],
        ['  leading spaces',"  Leading Spaces"],
        ['trailing spaces   ',"Trailing Spaces   "],
        ['ALL CAPS CRAZINESS',"All Caps Craziness"],
        ['rAnDoM CaPs CrAzInEsS',"Random Caps Craziness"],
        ['DN exRHscV QIqJRMwIirNkLESUZXmDj', 'DN Exrhscv Qiqjrmwiirnklesuzxmdj'],
        ['d UFpFQYNWrP', 'd Ufpfqynwrp'],
        ['Gd HdvsDAsFBFUuXArvAL T D', 'Gd Hdvsdasfbfuuxarval T D']
    ])('string %s returns %s', (input, result) => {
        expect(dropCap(input)).toBe(result)
    } )
})