const fs = require('fs');
const filename = 'input';

var banan = fs.readFileSync(filename, 'utf8').split('\n');
banan.pop();

var player_move_score = {
    'X': 1, //ROCK
    'Y': 2, //PAPER
    'Z': 3, //SCISSORS
};

var outcome_score = {
    'X': 0, //LOSE
    'Y': 3, //DRAW
    'Z': 6, //WIN
};

var score_map = {
    'A X': player_move_score['Z'] + outcome_score['X'], //ROCK LOSE SCISSORS
    'A Y': player_move_score['X'] + outcome_score['Y'], //ROCK DRAW ROCK 
    'A Z': player_move_score['Y'] + outcome_score['Z'], //ROCK WIN PAPER
    'B X': player_move_score['X'] + outcome_score['X'], //PAPER LOSE ROCK
    'B Y': player_move_score['Y'] + outcome_score['Y'], //PAPER DRAW PAPER
    'B Z': player_move_score['Z'] + outcome_score['Z'], //PAPER WIN SCISSORS
    'C X': player_move_score['Y'] + outcome_score['X'], //SCISSORS LOSE PAPER
    'C Y': player_move_score['Z'] + outcome_score['Y'], //SCISSORS DRAW SCISSORS
    'C Z': player_move_score['X'] + outcome_score['Z'], //SCISSORS WIN ROCK
};

console.log(banan.reduce((a, b) => a += score_map[b], 0));
