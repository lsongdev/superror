const superror = require('..');
const assert = require('assert');

function example(){
  return new Error('BOOM!'); // DONT MODIFY THIS LINE, IT WILL BREAK TEST CASE
}

const error = example();

const trace = superror.parseStackTrace(error.stack);

assert.equal(trace[0].line, 5);
assert.equal(trace[0].method, 'example');