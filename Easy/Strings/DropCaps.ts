// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

export function dropCap(n) {
    let res = ''
    if (!n || n.length < 3) return n
    for(let i=0; i< n.length; i++) {
        if (i === 0 && (n[i + 2] === ' ' || n[i + 1] === ' ')) {
            res += n[i]
            res += n[i + 1]
            i += 1
            continue
        }
        else if (n[i] === ' ') res += n[i]
        else if (i !== 0 && n[i - 1] === ' ' && (n[i + 2] === ' ' || n[i + 1] === ' ' || n[i + 2] === undefined)) {
            res += n[i]
            if (n[i + 1]) res += n[i + 1]
            i += 1
            continue
        }
        else if (i === 0  || n[i - 1] === ' ') {
            res += n[i].toUpperCase()
        } else {
            res += n[i].toLowerCase()
        }
    }
    return res
}