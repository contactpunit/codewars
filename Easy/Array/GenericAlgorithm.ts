// In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

// We determine how close a chromosome is to a ideal solution by calculating its fitness.https://www.codewars.com/kata/567b468357ed7411be00004a/train You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

// Your task is to return a collection containing an object with the chromosome and the calculated fitness.

// [
//     { chromosome: c, fitness: f },
//     { chromosome: c, fitness: f },
//   ...
// ]

export const fitness = (c) => {
    const ideal = '11110000';
    let r = 0;
    for (let i = 0; i < c.length; ++i) {
        if (c[i] === ideal[i]) {
            r++;
        }
    }
    return r / ideal.length;
}

export const mapPopulationFit = (population, fitness) => {
    const result = population.reduce((acc, curr) => {
        const res = { chromosome: curr, fitness: fitness(curr) }
        acc.push(res)
        return acc
    }, [])
    return result
}