// Given an Array A of N integers, return the smallest positive integer 
// (greater than 0)  that does niot occur in A.

// eg. given A = [1,3,6,4,1,2] funtion should return 5


export function nextSmallest(t) {
    if (t.every(e => e < 1)) return 1
    t.sort((a, b) => a - b)
    for (let i = 0; i < t.length; i++) {
        if (t[i] < 0) continue
        if (i === t.length - 1) {
            if (t[0] > 1) return t[0] - 1
            else return t[i] + 1
        }
        if ((t[i] + 1 === t[i + 1]) || t[i] === t[i + 1]) continue
        else return t[i] + 1
    }

}