Ao instalar bibliotecas de terceiros sempre instalar primeiro para js.
Exemplo do validator

```
$ npm install validator
```

Depois instala a bibliotecas para typescript.
Exemplo do validator

```
$ npm install @types/validator
```

Sendo tanto para devDependencies ou dependencies.
As vezes tudo é dev ou nao.

```
$ npm install @types/validator -D
$ npm install @types/validator --save-dev
```
Exemplo do nosso package.json
```js
{
  ...
  "devDependencies": {
    "@types/validator": "^13.7.2",
  },
  "dependencies": {
    "validator": "^13.7.0"
  }
}
```
Ele falou sobre, mas nunca usamos o lodash, ver depois.
```
$ npm install lodash
$ npm install @types/lodash --save-dev
```
