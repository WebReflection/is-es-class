'use strict';
const {getOwnPropertyDescriptor} = Object;

module.exports = Class => (
  typeof Class === 'function' &&
  getOwnPropertyDescriptor(
    Class,
    'prototype'
  )?.writable === false
);
