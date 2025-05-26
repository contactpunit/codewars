import { describe, it, expect } from 'vitest'
import { myLanguages } from '../../../Easy/Array/MyLanguages'

describe('myLanguages() test suite', () => {
    it.each([
        [{ "Java": 10, "Ruby": 80, "Python": 65 }, ["Ruby", "Python"]],
        [{ "Hindi": 60, "Greek": 71, "Dutch": 93 }, ["Dutch", "Greek", "Hindi"]],
        [{ "C++": 50, "ASM": 10, "Haskell": 20 }, []]
    ])('%s return %s', (input, result) => {
        expect(myLanguages(input)).toEqual(result)
    })
})