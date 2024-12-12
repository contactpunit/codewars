import { describe, it, expect } from "vitest";
import { fireFight } from "../../../Easy/Array/FireOnBoat";

describe('FireOnBoat test suite', () => {
    it('should replace Fire with ~~', () => {
        const input = "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
        const expected = "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"
        const result = fireFight(input)
        expect(result).toBe(expected)
    })

    it('should replace all occurances Fire with ~~', () => {
        const input = "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
        const expected = "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"
        const result = fireFight(input)
        expect(result).toBe(expected)
    })

    it('should return empty string', () => {
        const input = ""
        const expected = ""
        const result = fireFight(input)
        expect(result).toBe(expected)
    })
})