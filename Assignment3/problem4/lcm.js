"use strict";
var input = require('../../handleInput/input'),
    bigInt = require('big-integer');

input().then(function(data){
    var n = parseInt(data[0], 10);
    console.log(n);
    if(data.length < 2){
        process.exit();
    }else{
        var gcd = euclidGDC(data[0], data[1]),
            lcm = lcmCalc(data[0], data[1], gcd);
        console.log(lcm);
        process.exit();
    }
    process.exit();
});

//for any two positiove ints, a and b, LCM(a,b) * GCD(a,b) = a * b;
//therefore, LCM = (a*b)/gcd;
function lcmCalc(a, b, gcd){
    //for really big ints, this is going to start guessing...
    var product, lcm;
    a = bigInt(a.toString());
    b = bigInt(b.toString());
    product = a.multiply(b);
    lcm = product.divide(gcd);
    return lcm.toString();
}
function euclidGDC(a,b){
    if(b === 0){
        return a;
    }
    var remains = a%b;
    return euclidGDC(b, remains);
}