export function transcribeDNA(dna: string): string {
  const complement: { [key: string]: string } = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let result = '';

  for (const character of dna) {
    if (!(character in complement)) {
      throw new Error(`Invalid DNA nucleotide: ${character}`);
    }
    result += complement[character];
  }

  return `${result}`;
}
