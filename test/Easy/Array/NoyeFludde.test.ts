import { describe, it, expect } from 'vitest'
import { boatLoader } from '../../../Easy/Array/NoyeFludde'

describe('boatLoader test suite', () => {
    it.each([
        [['g','c','h','c','g','m'], [['c','c'],['g','g']]],
        [['a','d','G','V','X','F','g','h','s','r','a','g','n','s','e','r','j','a','f','D','F','G','R','H','C','X','B','N','G','U','G','F','p','s','r','g','a'], [["a","a"],["F","F"],["G","G"],["g","g"],["r","r"],["s","s"],["X","X"]]],
        [['g','g','G','c','p','x','z','Z','G','c','g','g'], [['c','c'],['G','G'],['g','g']]],
        [[5, 6, 5, 'g','g','G','c','p','x','z','Z','G','c','g','g'], [['c','c'],['G','G'],['g','g']]]
    ])('should test if %s array results in %s', (input, actual) => {
        expect(boatLoader(input)).toEqual(actual)
    })

})