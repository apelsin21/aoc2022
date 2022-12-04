const fs = require('fs');
const filename = 'input';

var banan = fs.readFileSync(filename, 'utf8').split('\n').slice(0,-1);

let overlaps_at_all = (pair) => {
    let a = pair.slice(0, pair.indexOf(','));
    let b = pair.slice(pair.indexOf(',')+1);

    let a1 = parseInt(a.slice(0,a.indexOf('-')));
    let a2 = parseInt(a.slice(a.indexOf('-')+1));

    let b1 = parseInt(b.slice(0,b.indexOf('-')));
    let b2 = parseInt(b.slice(b.indexOf('-')+1));

    for(var i = a1; i <= a2; i++) {
        if(i >= b1 && i <= b2) {
            return 1;
        }
    }

    return 0;
}

var num_overlaps = banan.reduce((a, b) => a += overlaps_at_all(b), 0);

console.log(num_overlaps);
