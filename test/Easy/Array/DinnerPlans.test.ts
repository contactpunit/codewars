import { describe, it, expect } from 'vitest'
import { commonGround } from '../../../Easy/Array/DinnerPlans'

describe('commonGround() test suite', () => {
    it.each([
        ["eat chicken", "eat chicken and rice", 'eat chicken'],
        ["eat a burger and drink a coke", "drink a coke", 'drink a coke'],
        ["i like turtles", "what are you talking about", 'death'],
        ["HrK yLq GFs5", "pJJC rqw GFs5", "GFs5"]
    ])('lamps %s and drone %s returns at %s', (s1, s2, result) => {
        expect(commonGround(s1, s2)).toBe(result)
    } )
})