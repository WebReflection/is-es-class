# is-es-class

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/is-es-class/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/is-es-class?branch=main) [![build status](https://github.com/WebReflection/is-es-class/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/is-es-class/actions)

The only reasonable way to understand if a class has been defined, or transpiled, as such.

Explained in [this StackOverflow answer](https://stackoverflow.com/questions/30758961/how-to-check-if-a-variable-is-an-es6-class-declaration/75567955#75567955).

```js
// const isESClass = require('is-es-class');
import isESClass from 'is-es-class';

isESClass(class {});        // ✅
isESClass(function () {});  // ❌
isESClass(() => {});        // ❌
isESClass({m(){}}.m);       // ❌
```
