"use strict";
var readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    }),
    input = [];

rl.on('line', function(line){
    input.push(line);
    if(input.length === 2){
        rl.close();
        processInput();
    }
});

function processInput(){
    var sequence = input[1].split(' '),
        high = -1, low = -1, last;
    sequence.forEach(function(el){
        var n = parseInt(el, 10);
        if(n > high){
            low = high;
            high = n;
        }else if(n > low){
            low = n;
        }
    });
    console.log( high * low );
}