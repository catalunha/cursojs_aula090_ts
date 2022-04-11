//recomendado
//testado o retorno
const body = document.querySelector('body');
// body?.style.background = 'red';// reclama pois body pode ser null
if (body) body.style.background = 'red';

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//nao recomendado
// const body2 = document.querySelector('body')!; //garanto que nao será nulo. caminho ruim
export default 1;
