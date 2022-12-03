function char_to_prio(ascii) {
    return ascii >= 97 ? ascii - 96 : ascii - 38;
}

console.log(require('fs').readFileSync('input', 'utf8').split('\n').slice(0,-1).reduce((a,b,i,all) => (i+1)%3==0 ? a += char_to_prio([...b].find(c => all[i-2].indexOf(c) != -1 && all[i-1].indexOf(c) != -1).charCodeAt()) : a, 0));
