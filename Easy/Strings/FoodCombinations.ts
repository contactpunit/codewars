// There are many different valid combinations of 2 foods it doesn't matter which one you choose.
// But there should be 2 different foods listed unless there was only one food given in the input array.
// Capitalization should be correct, the first given food should be capitalized, but the second should not.
// The input array should not be modified by the method.

// The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)

// The original kata language is Ruby

// Bonus:
// If you thought this kata was easy, try this one: Testing 'Food combinations' in which you get to write a method similar to the one the tests here use to check that a result is valid and returns any errors it has.

export function actuallyReallyGood(foods) {
    if (!foods.length) return "You know what's actually really good? Nothing!"

    const fFoods = [...new Set(foods)]
    

}