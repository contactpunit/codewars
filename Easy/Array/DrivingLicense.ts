// Task
// The UK driving number is made up from the personal details of the driver.The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname(padded with 9s if less than 5 characters)

// 6: The decade digit from the year of birth(e.g.for 1987 it would be 8)

// 7–8: The month of birth(7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

// 9–10: The date within the month of birth

// 11: The year digit from the year of birth(e.g.for 1987 it would be 7)

// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common.We will always use 9

// 15–16: Two computer check digits.We will always use "AA"
// Your task is to code a UK driving license number using an Array of data.The Array will look like

// data = ["John", "James", "Smith", "01-Jan-2000", "M"];
// Where the elements are as follows

// 0 = Forename
// 1 = Middle Name(if any)
//     2 = Surname
// 3 = Date of Birth(In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M - Male or F - Female
// You will need to output the full 16 digit driving license number, in all UPPERCASE.

// Good luck and enjoy!

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export function driver(data) {
    let license = ''
    const [firstName, middleName, lastName, dob, sex] = data
    const [day, month, year] = dob.split('-')
    const midx = +months.findIndex(e => e === month.slice(0, 3)) + 1
    const mpart = sex === 'F' ? (midx + 50).toString() : midx < 10 ? '0' + midx : midx
    license += lastName.length >= 5 ? lastName.slice(0, 5) : lastName + '9'.repeat(5 - lastName.length)
    license += year[2] + mpart + day + year[3] + firstName[0]
    license += middleName ? middleName[0] : '9'
    license += '9AA'
    return license.toUpperCase()
}