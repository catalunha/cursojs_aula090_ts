// encadeamento opcional -> se tem valor continuar se for null/undefined retorna null/undefined obj?.
//operador coalescencia nula -> check null e undefined ou ??
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};
const documento: Documento = {
  titulo: 'titulo...',
  texto: 'texto...',
  data: new Date(),
};
console.log(documento);
console.log(documento.data?.toDateString() ?? 'nao tem Data');
console.log(undefined ?? '...a esquerda era undefined');
console.log(null ?? '...a esquerda era null');
