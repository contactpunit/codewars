// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

export function fizzbuzz(n) {
  const range = Array.from({length: n}, (v, i) => i + 1)
  return range.map(e => {
    if (e % 3 === 0 && e % 5 === 0) return 'FizzBuzz'
    else if (e % 3 === 0) return 'Fizz'
    else if (e % 5 === 0) return 'Buzz'
    else return e
  })
}
