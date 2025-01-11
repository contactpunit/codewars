import { describe, it, expect } from 'vitest'
import { getLosAngelesPoints } from '../../../Easy/Array/TeamPoints'

describe('getLosAngelesPoints() test suite', () => {
    const basketballResults = [
        ['Golden State Warriors', '559:503'],
        ['Memphis Grizzlies', '550:511'],
        ['Portland Trail Blazers', '527:520'],
        ['Houston Rockets', '494:458'],
        ['San Antonio Spurs', '469:460'],
        ['Phoenix Suns', '523:522'],
        ['Minnesota Timberwolves', '495:494'],
        ['Utah Jazz', '399:402'],
        ['Sacramento Kings', '420:431'],
        ['Denver Nuggets', '646:658'],
        ['Los Angeles Clippers', '382:422'],
        ['Dallas Mavericks', '492:513'],
        ['Los Angeles Lakers', '641:637'],
        ['Oklahoma City Thunder', '315:318'],
        ['New Orleans Pelicans', '433:454']
      ]

    it('should give correct number of points', () => {
        expect(getLosAngelesPoints(basketballResults)).toBe(1023)
    } )
})