function parseStackTrace(stack) {
  return stack.split('\n').map(parseStackLine).filter(Boolean);
}

const V8_OUTER1 = /^\s*(eval )?at (.*) \((.*)\)$/;
const V8_OUTER2 = /^\s*at()() (\S+)$/;
const V8_INNER = /^\(?([^\(]+):(\d+):(\d+)\)?$/;

function parseStackLine(line) {
  var outer = line.match(V8_OUTER1) || line.match(V8_OUTER2);
  if (!outer) return null;
  var inner = outer[3].match(V8_INNER);
  if (!inner) return null;

  var method = outer[2] || '';
  if (outer[1]) method = 'eval at ' + method;
  return {
    method: method,
    location: inner[1] || '',
    line: parseInt(inner[2]) || 0,
    column: parseInt(inner[3]) || 0,
  };
}

module.exports = parseStackTrace;