// Task
// Given a string, you need to gradually pull apart the string and return an array of three strings (in Haskell, a tuple of (String, String, Maybe Char)).

// You should repeat both of the following steps together until the original string length is less than 2:

// a) Remove the last character from the original string, append it to the 1st solution string.

// b) Remove the first character from the original string, append it to the 2nd solution string.

// Once the original string length becomes less than 2, the remaining character from the original string (if any) is assigned to the 3rd solution.

// Example
// "exampletesthere" becomes: ["erehtse","example","t"]

// Step	Original String	1st String	2nd String	Remaining String
// 1	exampletesthere	e	e	xampletesther
// 2	xampletesther	er	ex	ampletesthe
// 3	ampletesthe	ere	exa	mpletesth
// 4	mpletesth	ereh	exam	pletest
// 5	pletest	ereht	examp	letes
// 6	letes	erehts	exampl	ete
// 7	ete	erehtse	example	t

export function popShift(s) {
    const mid = Math.floor(s.length / 2)
    const remain = s.length % 2
    if (!s.length) return ['', '', '']
    else if (s.length === 1) return ['', '', s[0]]
    else {
        const first = remain === 0 ? s.slice(mid, s.length).split('').reverse().join('') : s.slice(mid + 1, s.length).split('').reverse().join('')
        const middle = s.slice(0, mid)
        const last = remain === 0 ? '' : s[mid]
        return [first, middle, last]
        // let last
        // let first:any = []
        // let m
        // if (remain !== 0) {
        //     last = s[mid]
        //     m = mid
        // }
        // else {
        //     last = ''
        //     m = mid + 1
        // }
        // for(let i = s.length - 1; i > m; i --) {
        //     first.push(s[i])
        // }
        // return [first.join(''), s.slice(0, m), last]
    }
}
