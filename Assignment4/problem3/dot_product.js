"use strict";

var readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    }),
    n, a = [], b = [];

rl.on('line', function(data){
    data = data.toString().trim().split(' ').map(function(el){
        return parseInt(el, 10);
    });
    if(!n){
        n = data[0];
    }else if(a.length === 0){
        a = data;
    }else{
        b = data;
        a.sort(sortNums).reverse();
        b.sort(sortNums);
        var dotProduct = minDotProduct(a, b);
        console.log(dotProduct);
        process.exit();
    }

});
function sortNums(a, b){
    return a - b;
}
function minDotProduct(a,b){
    return a
        .map(function(el, idx){
            return el*b[idx];
        })
        .reduce(function(prev, cur){
            return prev + cur;
        });
}