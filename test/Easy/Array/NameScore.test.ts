import { describe, it, expect } from 'vitest'
import { nameScore } from '../../../Easy/Array/NameScore'

describe('nameScore() test suite', () => {
    it.each([
        // ['Mary Jane', {"Mary Jane":20}],
        // ['Luke Skywalker', {"Luke Skywalker":41}],
        ['Zoe Andrews', {"Zoe Andrews":23}],
        // ['Greg Z MacDonald', {"Greg Z MacDonald":26}]
    ])('input %s and %s results in %s', (input, result) => {
        expect(nameScore(input)).toEqual(result)
    })
})