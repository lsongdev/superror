const print = (src, line, column, n) => {
  n = n || 3;
  const lines = src.split('\n');
  const start = Math.max(line - n, 0);
  const end = Math.min(lines.length, line + n);
  const context = lines.slice(start, end).map((text, i) => {
    var curr = start + i + 1;
    var out = `${curr} ${text}`;
    if (curr === line && column) {
      out += '\n>' + '-'.repeat(column) + '^';
    }
    return out;
  }).join('\n');
  return context;
}

module.exports = print;