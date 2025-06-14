// In genetics 2 differents DNAs sequences can code for the same protein.

// This is due to the redundancy of the genetic code, in fact 2 different tri - nucleotide can code for the same amino - acid.For example the tri - nucleotide 'TTT' and the tri - nucleotide 'TTC' both code for the amino - acid 'F'.For more information you can take a look here.

// Your goal in this kata is to define if two differents DNAs sequences code for exactly the same protein.Your function take the 2 sequences you should compare.For some kind of simplicity here the sequences will respect the following rules:

// It is a full protein sequence beginning with a Start codon and finishing by an Stop codon
// It will only contain valid tri - nucleotide.
// The translation hash is available for you under a translation hash $codons[Ruby] or codons[Python and JavaScript].

// To better understand this kata you can take a look at this one, it can help you to start.

const codons = {
    TTC: 'F',
    TTT: 'F',
    TTA: 'L',
    TTG: 'L',
    CTT: 'L',
    CTC: 'L',
    CTA: 'L',
    CTG: 'L',
    ATT: 'I',
    ATC: 'I',
    ATA: 'I',
    ATG: 'M',
    GTT: 'V',
    GTC: 'V',
    GTA: 'V',
    GTG: 'V',
    TCT: 'S',
    TCC: 'S',
    TCA: 'S',
    TCG: 'S',
    AGT: 'S',
    AGC: 'S',
    CCT: 'P',
    CCC: 'P',
    CCA: 'P',
    CCG: 'P',
    ACT: 'T',
    ACC: 'T',
    ACA: 'T',
    ACG: 'T',
    GCT: 'A',
    GCC: 'A',
    GCA: 'A',
    GCG: 'A',
    TAT: 'Y',
    TAC: 'Y',
    CAT: 'H',
    CAC: 'H',
    CAA: 'Q',
    CAG: 'Q',
    AAT: 'N',
    AAC: 'N',
    AAA: 'K',
    AAG: 'K',
    GAT: 'D',
    GAC: 'D',
    GAA: 'E',
    GAG: 'E',
    TGT: 'C',
    TGC: 'C',
    TGG: 'W',
    CGT: 'R',
    CGC: 'R',
    CGA: 'R',
    CGG: 'R',
    AGA: 'R',
    AGG: 'R',
    GGT: 'G',
    GGC: 'G',
    GGA: 'G',
    GGG: 'G',
    TAA: '*',
    TGA: '*',
    TAG: '*'
}

export function codeForSameProtein(seq1, seq2) {
    //your code here - values loaded in the "codons" variable
    const seqParts1 = seq1.match(/[A-Z]{1,3}/g)
    const seqParts2 = seq2.match(/[A-Z]{1,3}/g)
    return seqParts1.every((curr, idx) => codons[curr] === codons[seqParts2[idx]])

}