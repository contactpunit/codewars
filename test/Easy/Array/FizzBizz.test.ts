import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../../../Easy/Array/FizzBizz'

describe('fizzbuzz() test suite', () => {
    it.each([
        [3, [1, 2, "Fizz"]],
        [10, [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']]
    ])('input %s results in %s', (input, result) => {
        expect(fizzbuzz(input)).toEqual(result)
    })
})