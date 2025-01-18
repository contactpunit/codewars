// DESCRIPTION:
// Create an identity matrix of the specified size ( >= 0 ).

// Some examples:

// (1)  =>  [[1]]

// (2) => [ [1,0],
//          [0,1] ]

//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]   

export function getMatrix(number) {
return Array(number).fill(0).map((_, i) => Array(number).fill(0).map((_, j) => {
        if (j === i) return 1
        else return 0
    }))
}