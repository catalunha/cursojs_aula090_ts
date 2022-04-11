# ts config
criar o arq tsconfig.json
```
$ npx tsc --init
```
editando o arquivo: tsconfig.json
escrever o codigo e compilar com:
pois ele ja tem o arq de tsconfig.json
```
$ npx tsc
```

# prettier
```
$ npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```
editando o arquivo: .prettierrc.js

# instalando o eslint
```
$ npm install eslint -D
//faz a integraçã do eslint com o ts, com:
$ npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

# compilar ts no node
```
$ npm install ts-node -D
```
config o code runner em 
.vscode/settings.json



# modos de operação
TS tem
  * module mode - modo de modulos
  * script mode - modo de scripts
  
E se comportam assim:
  * dois arq com mesma variavel ele reclama. basta exportar que vai para o module mode e resolvido.
  * se eu nao exporto nada ele esta no escopo global do ts.
  * se eu exporto alguma var/class/etc ele vai para o module mode.


# compilando um exemplo simples
digite este codigo em ts
.../index.ts
```ts
function greet(name){
  return `Olá ${name}`;
}
console.log(greet('Ana'));
```
a pasta node_modules/bin é usada pelo npx para compilar projeto.
neste caso estamos usando o tsc
transpilando para js com:
```
$ npx tsc index.ts
```
teremos
```js
function greet(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greet('Ana'));
```

node entende js e nao ts



# instalando o typescript
-D = --save-dev
\$ npm install typescript -D


# inciando node

\$ npm init -y



# config gitignore
https://www.toptal.com/developers/gitignore
digitei: node
https://www.toptal.com/developers/gitignore/api/node