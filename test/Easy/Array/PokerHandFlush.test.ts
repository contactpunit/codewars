import {describe, it, expect} from 'vitest'
import { isFlush } from '../../../Easy/Array/PokerHndFlush'

describe('poker hand flush test suite', () => {
    it.each([
        ["AS", "3S",  "9S", "KS", "4S"],
        ["AD", "4S",  "7H", "KC", "5S"]
    ])('should check if %cards its a flush or not',
    (cards) => {
        expect(isFlush(cards)).toBeTruthy()
    })
})