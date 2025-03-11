import { it, describe, expect } from 'vitest'
import { part } from '../../../Easy/Array/AlanPartridge1'

describe('part test suite()', () => {
    it.each([
        [['Grouse', 'Partridge', 'Pheasant'], 'Mine\'s a Pint!'],
        [['Pheasant', 'Goose', 'Starling', 'Robin'], 'Lynn, I\'ve pierced my foot on a spike!!'],
        [['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster'], 'Mine\'s a Pint!!!!!!!!'],
    ])('%s input returns %s', (input, output) => {
        expect(part(input)).toBe(output)
    })
})