// Write a function that takes a single non-empty string of only lowercase and uppercase 
// ascii letters (word) as its argument, and returns an ordered list containing the indices of
//  all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

export const capitals = function (word) {
	if (!word) return []
	const upper : number[] = []
	for(const [id, e] of word.split('').entries()) {
		if (e.toUpperCase() === e) upper.push(id)
	}
	return upper
};
