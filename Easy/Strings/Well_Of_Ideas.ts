// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

export function well(x){
    const final = x.reduce((acc, curr) => {
        if (curr === 'good') {
            acc[0] += 1
         } else { 
            acc[1] += 1
         }
         return acc
        }, [0, 0])
    return final[0] > 2  ? 'I smell a series!' : final[0] >= 1 ? 'Publish!' : 'Fail!' 
}