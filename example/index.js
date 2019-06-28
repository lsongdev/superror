const superror = require('..');

const err = new Error('BOOM!');

const stack = superror.parseStackTrace(err.stack);

console.log(stack);