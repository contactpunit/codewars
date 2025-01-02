// DESCRIPTION:
// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

type ObjectShape = { 
    a?: number; 
    b?: number; 
    c?: number; 
    d?: number; 
    e?: number;
};

export function combine(...args: ObjectShape[]) {
    return args.reduce((acc, curr) => {
        for (let k in curr) {
            if (Object.keys(acc).includes(k)) {
                acc[k] += curr[k]
            }
            else acc[k] = curr[k]
        }
        return acc
    }, {})
}