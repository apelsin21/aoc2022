var d = '';
console.log(require('fs').readFileSync('input', 'utf8').split('\n').slice(0,-1).reduce((a,b,i,all) => (i+1)%3==0 ? a += ((d = [...b].find(c => all[i-2].indexOf(c) != -1 && all[i-1].indexOf(c) != -1).charCodeAt()) - (d > 96 ? 96 : 38)) : a, 0));
