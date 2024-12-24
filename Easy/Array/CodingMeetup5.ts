// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// 1279895% of 1,2546,505 of 7,978PiotrBerebecki
// JavaScript
// TRAINNEXT KATA
// Details
// Solutions
// Forks (3)
// Discourse (22)
// Collect|
// DESCRIPTION:
// You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

export function countLanguages(list) {
    return list.reduce((acc, curr) => {
        if (!(curr.language in acc)) acc[curr.language] = 1
        else acc[curr.language] += 1
        return acc
    }, {})
}