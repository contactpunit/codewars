import { it, describe, expect } from 'vitest'
import { findSpaceship } from '../../../Easy/Array/FindSpaceship'

describe('findSpaceship test suite()', () => {

    it.each([
        ['..........\n..........\n.......X..\n..........\n..........', [7, 2]],
        ['.......\nX.......', [0, 0]],
        ['........................', 'Spaceship lost forever.'],
        ['X', [0, 0]],
        [, 'Spaceship lost forever.']
    ])('x %s and y %s is %s', (x, result) => {
        expect(findSpaceship(x)).toEqual(result)

    })
})