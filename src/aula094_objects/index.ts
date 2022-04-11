const objetoA: {
  chaveA: string;
  readonly chaveB: string; // tupo final do dart
  [key: string]: unknown; // pouco usado
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};
objetoA.chaveA = 'valorA1';
// objetoA.chaveB = 'valorA1'; // erro

console.log(objetoA);
