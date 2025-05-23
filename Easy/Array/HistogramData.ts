// DESCRIPTION:
// You will be given an array of non-negative integers and positive integer bin width.

// Your task is to create the Histogram method that will return histogram data corresponding to the input array. The histogram data is an array that stores under index i the count of numbers that belong to bin i. The first bin always starts with zero.

// On empty input you should return empty output.

// Examples:

// For input data [1, 1, 0, 1, 3, 2, 6] and binWidth=1 the result will be [1, 3, 1, 1, 0, 0, 1] as the data contains single element "0", 3 elements "1" etc.
// For the same data and binWidth=2 the result will be [4, 2, 0, 1]
// For input data [7] and binWidth=1 the result will be [0, 0, 0, 0, 0, 0, 0, 1]

export function Histogram(data, binWidth) {
    let start = 0
    let end = binWidth
    const res = data.map((_, idx) => data.filter(a => a === idx).length)
    return res.reduce((acc) => {
        if (res.slice(start, end).length) acc.push(res.slice(start, end).reduce((a, c) => a += c, 0))
        start = end
        end += binWidth
        return acc
    }, [])
}