// Description:
// *** No Loops Allowed ***

//     You will be given an array(a) and a limit value(limit).You must check that all values in the array are below or equal to the limit value.If they are, return true.Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops.Do not modify input array.

// Looking for more, loop - restrained fun ? Check out the other kata in the series:

export function smallEnough(a, limit) {
    a.sort((a, b) => b - a)
    if (a[0] <= limit) return true
    else return false
}