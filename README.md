# is-es-class

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/is-es-class/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/is-es-class?branch=main) [![build status](https://github.com/WebReflection/is-es-class/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/is-es-class/actions)

The only reasonable way to understand if a class has been defined, or transpiled, as such.

```js
// const isESClass = require('is-es-class');
import isESClass from 'is-es-class';

isESClass(class {});        // ✅
isESClass(function () {});  // ❌
isESClass(() => {});        // ❌
isESClass({m(){}}.m);       // ❌
```
