"use strict";
var input = require('../../handleInput/input'),
    bigInt = require('big-integer');
input().then(function(data){
    if(data.length < 2){
        process.exit();
    }else{
        var lastDigit = fibonacci(data[0], parseInt(data[1],10));
        console.log(lastDigit);
        process.exit();
    }
});

function compare(a,b){
    if(a.length !== b.length){
        return false;
    }
    for(var i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            return false;
        }
    }
    return true;
}
function fibonacci(n, m){
    var fModN = [0, 1],
        period = [],
        compareIdx = 0;
    n = bigInt(n);
    if(n.toJSNumber()<2){
        return fModN[n];
    }
    for(var i = 2; i <= n.toJSNumber(); i++){
        fModN[i] = (fModN[i-1] + fModN[i-2]) % m;
        //we know the period will start with 1 & 0, but we could change this to represent fModN[0] & fModN[1]
        if(fModN[i] === 1 && fModN[i-1] === 0){
            if(period.length === 0){
                compareIdx = i-2;
                period.push(0);
            }
        }
        if(period.length-1 === compareIdx){
            if(!compare(period, fModN.slice(0, compareIdx+1))){
                period = [];
                compareIdx = 0;
            }else{
                var idx = n.divmod(period.length).remainder.toJSNumber();
                return fModN[idx]% m;
            }
        }
        if(compareIdx){
            period.push(fModN[i]);
        }
    }
    return fModN[n];
}