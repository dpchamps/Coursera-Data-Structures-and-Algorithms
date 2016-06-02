"use strict";
var readline = require('readline'),
    tco = require('tco'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

rl.on('line', function(data) {
    data = data.toString().trim().split(' ').map(function (el) {
        return parseInt(el, 10);
    });
    var pairwiseSummands = findSummands(data[0], 1);
    console.log(pairwiseSummands.length);
    console.log(pairwiseSummands.join(" "));
    process.exit();
});
var findSummands = tco( function(k, l, summands){
    if(typeof summands === 'undefined'){
        summands = [];
    }
    if(k <= (l * 2)){
        summands.push(k);
        return [null, summands];
    }else{
        summands.push(l);
        return [findSummands, [k-l, l+1, summands]];
    }
});