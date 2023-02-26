/* (c) Andrea Giammarchi - ISC */
const {getOwnPropertyDescriptor} = Object;

export default Class => (
  typeof Class === 'function' &&
  getOwnPropertyDescriptor(
    Class,
    'prototype'
  )?.writable === false
);
