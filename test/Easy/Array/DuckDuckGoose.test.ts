import { describe, it, expect } from 'vitest'
import { duckDuckGoose } from '../../../Easy/Array/DuckDuckGoose';

describe('duckDuckGoose() test suite', () => {
    let players = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
    it.each([
        [players, 1, "a"],
        [players, 3, "c"],
        [players, 10, "z"],
        [players, 20, "z"],
        [players, 30, "z"],
        [players, 18, "g"],
        [players, 28, "g"],
        [players, 12, "b"],
        [players, 2, "b"],
        [players, 7, "f"]
    ])('input array %s num %s result is %s', (players, num, result) => {
        expect(duckDuckGoose(players, num)).toBe(result)
    })
})