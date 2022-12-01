const fs = require('fs');
const filename = 'input';

var banan = fs.readFileSync(filename, 'utf8').split('\n');
banan.pop();

var highest = banan.reduce((acc, curr) => {
	curr === '' ? acc.push(0) : acc[acc.length-1] += parseInt(curr);
	return acc;
}, [0]).sort((a,b) => b - a);
console.log(highest);

console.log(highest.slice(0, 3).reduce((a,b) => a+b));
