var dashToCamel = function(str) {
  const dashPattern = /-\S/g;
  let newStr = '', index = 0, execRes = dashPattern.exec(str);
  while(execRes) {
    newStr += `${str.substring(index, execRes.index)}${str[execRes.index+1].toUpperCase()}`;
    index = execRes.index + 2;
    execRes = dashPattern.exec(str);
  }
  return newStr+str.substring(index);
}

const str = process.argv[2];
if (typeof str !== 'string') {
  throw new TypeError('参数必须是字符串');
}
console.log(dashToCamel(str));
