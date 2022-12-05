const fs = require('fs');
const filename = 'input';

let banan = fs.readFileSync(filename, 'utf8').split('\n').slice(0,-1);

//contains arrays which are treated like stacks
let stacks = [];

let hanoi_lines = banan.filter(l => l.indexOf('[') != -1);
let move_lines = banan.filter(l => l.indexOf('move') != -1);

let num_stacks = (banan[hanoi_lines.length-1].split('[')).length - 1;
for(var i = 0; i < num_stacks; i++) {
    stacks.push([]);
}

for(let i = 0; i < hanoi_lines.length; i++) {
    let line = hanoi_lines[i];
    let regexp = /\[(.*?)\]/g;
    console.log(line);

    for(var j = 1; j < line.length; j+=4) {
        if(line[j] != ' ') {
            console.log('appending ' + line[j] + ' to stackindex: ' + ((j-1)/4));
            stacks[((j-1)/4)].push(line[j]);
        }
    }
}
stacks.forEach(x => x.reverse());

console.log(stacks);

console.log(move_lines);

for(var move of move_lines) {
    let ws = move.split(' ');
    let count = parseInt(ws[1]);
    let from = parseInt(ws[3])-1;
    let to = parseInt(ws[5])-1;
    var additions = [];

    console.log('moving ' + count + ' from ' + stacks[from] + ' to ' + stacks[to]);

    for(var i = 0; i < count; i++) {
        var elem = stacks[from].pop();
        additions.push(elem);
    }

    stacks[to] = stacks[to].concat(additions.reverse());

    console.log('from after: ' + stacks[from]);
    console.log('to after: ' + stacks[to]);
}

let tops = stacks.reduce((a,b) => a += b[b.length-1], '');

console.log(tops);
