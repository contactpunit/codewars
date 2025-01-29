import { describe, it, expect } from 'vitest'
import { leagueCalculate } from '../../../Easy/Array/sportLeague'

describe('leagueCalculate() test suite', () => {
    it.each([
        ["teamA","teamB","draw", [["teamA",4],["teamB",4],["teamC",3],["teamD",3]]],
        ["teamC","teamD","win", [["teamC",6],["teamA",4],["teamB",4],["teamD",3]]],
        ["teamA","teamC","draw", [["teamC",7],["teamA",5],["teamB",4],["teamD",3]]],
        ["teamB","teamD","win", [["teamB",7],["teamC",7],["teamA",5],["teamD",3]]],
        ["teamA","teamB","win", [["teamA",8],["teamB",7],["teamC",7],["teamD",3]]],
        ["teamC","teamD","draw", [["teamA",8],["teamC",8],["teamB",7],["teamD",4]]],
        ["teamD","teamA","draw", [["teamA",9],["teamC",8],["teamB",7],["teamD",5]]],
        ["teamC","teamB","win", [["teamC",11],["teamA",9],["teamB",7],["teamD",5]]]
    ])('input %s with start %s returns %s', (input1, input2, outcome, result) => {
        expect(leagueCalculate(input1, input2, outcome)).toEqual(result)
    })
})