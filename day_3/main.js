const fs = require('fs');
const filename = 'input';

var banan = fs.readFileSync(filename, 'utf8').split('\n').slice(0,-1);

function char_to_prio(char) {
    var ascii_val = char.charCodeAt();

    if(ascii_val >= 97)
        return ascii_val - 96; //'a' - 'z'
    else
        return ascii_val - 38; //'A' - 'Z'
}

var sum = banan.reduce((a,b,i,all) => {
    var prio = 0;

    if((i+1)%3==0) {
        var unique=[...b].find(c => all[i-2].indexOf(c) != -1 && all[i-1].indexOf(c) != -1);

        prio = char_to_prio(unique)
    }

    return a+=prio;
}, 0);

console.log(sum);
