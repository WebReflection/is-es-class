const isESClass = require('../cjs');

function Class() {}
Object.defineProperty(Class, 'prototype', {writable: false});

console.assert(isESClass(class {}), 'class');
console.assert(isESClass(Class), 'class');
console.assert(!isESClass(function () {}), 'function');
console.assert(!isESClass(() => {}), 'arrow');
console.assert(!isESClass({m(){}}.m), 'method');

