var dashToCamel = function(str) {
  const dashPattern = /(-\S)/g;
  return str.replace(dashPattern, (_, $2) => $2[1].toUpperCase());
}

const str = process.argv[2];
if (typeof str !== 'string') {
  throw new TypeError('参数必须是字符串');
}
console.log(dashToCamel(str));
