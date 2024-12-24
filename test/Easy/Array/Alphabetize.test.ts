import {describe, it, expect} from 'vitest'
import { sortIt } from '../../../Easy/Array/Alphabetize'

describe('betweenExtremes() test suite', () => {
    it.each([
        ['bill, bell, ball, bull', 2, 'ball, bell, bill, bull'],
        ['cat, dog, eel, bee', 3, 'bee, dog, eel, cat'],
        ["Ulrich Kesler, Siegfried Kircheis, Cornelius Lutz, Wolfgang Mittermeyer, Neidhardt Muller, Ernst von Eisenach, Hildegard von Mariendorf, Anton Ferner, Reinhard von Lohengramm, Karl Gustav Kempf, Theodor von Lucke, Arthur von Streit, Fritz Josef Bittenfeld, August Samuel Wahlen, Adalbert von Fahrenheit, Paul von Oberstein, Emil von Secla, Karl Robert Steinmetz, Oskar von Reuenthal", 5, 'Emil von Secla, Karl Gustav Kempf, Karl Robert Steinmetz, Paul von Oberstein, Adalbert von Fahrenheit, Ulrich Kesler, Theodor von Lucke, Cornelius Lutz, Hildegard von Mariendorf, Siegfried Kircheis, Wolfgang Mittermeyer, Neidhardt Muller, Reinhard von Lohengramm, Anton Ferner, Oskar von Reuenthal, August Samuel Wahlen, Ernst von Eisenach, Arthur von Streit, Fritz Josef Bittenfeld']
    ])('should find diff between largest in array %s as %s', (str, num, result) => {
        expect(sortIt(str, num)).toBe(result)
    })
})