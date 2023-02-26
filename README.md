# is-es-class

The only reasonable way to understand if a class has been defined, or transpiled, as such.

```js
// const isESClass = require('is-es-class');
import isESClass from 'is-es-class';

isESClass(class {});        // ✅
isESClass(function () {});  // ❌
isESClass(() => {});        // ❌
isESClass({m(){}}.m);       // ❌
```
