"use strict";
var input = require('../../handleInput/input');
input().then(function(data){
    var n = parseInt(data[0], 10);
    console.log(n);
    if(data.length < 2){
        process.exit();
    }else{
        var gcd = euclidGDC(data[0], data[1]);
        console.log(gcd);
        process.exit();
    }
    process.exit();
});
function euclidGDC(a,b){
    if(b === 0){
        return a;
    }
    var remains = a%b;
    return euclidGDC(b, remains);
}