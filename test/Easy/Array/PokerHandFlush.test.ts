import {describe, it, expect} from 'vitest'
import { isFlush } from '../../../Easy/Array/PokerHndFlush'

describe('poker hand flush test suite', () => {
    it.each([
        [["AS", "3S",  "9S", "KS", "4S"]],
        [[  "QD", "4D", "10D", "KD", "5D" ]],
        [[ "10D", "4D",  "QD", "KD", "5D" ]]
    ])("should check if %s its a flush or not",
    (cards) => {
        expect(isFlush(cards)).toBeTruthy()
    })

    it('should check it is not a flush', () => {
        expect(isFlush(["AD", "4S",  "7H", "KC", "5S"])).toBeFalsy()
    })
})