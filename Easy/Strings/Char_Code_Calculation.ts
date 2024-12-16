// DESCRIPTION:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

export function calc(x){
    const sum = (n) => [...n].reduce((acc, curr) => acc += +curr, 0)
    const orig = x.replace(/./g, (e) => e.charCodeAt(0))
    const conv = orig.replace(/7/g, '1' )
    return sum(orig) - sum(conv)
}