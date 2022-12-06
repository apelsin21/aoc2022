const fs = require('fs');
const filename = 'input';

let banan = fs.readFileSync(filename, 'utf8').split('\n').slice(0,-1)[0];

console.log(banan);

for(let i = 13; i < banan.length; i++) {
    let substring = banan.substring(i-13, i+1);
    if(substring.length == [...new Set(substring)].length) {
        console.log(substring + ' is unique @ ' + (i+1));
break;
    }
    console.log(substring);
}

console.log(banan);
