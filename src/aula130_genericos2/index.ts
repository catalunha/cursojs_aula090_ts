const arrayNumeros: Array<number> = [1, 2, 3];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}
promiseAsync().then((res) => console.log(res + 1));

function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
minhaPromise().then((res) => console.log(res * 10));
