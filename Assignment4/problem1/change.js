"use strict";
var input = require('../../handleInput/input.js');

input().then(function(data){
    if(data.length < 1){
        process.exit();
    }
    console.log( getChange(data[0]) );
    process.exit();
});

function getChange(money){
    money = parseInt(money, 10);
    var coins = 0,
        change = [10,5,1];

    while(money > 0){
        if(money >= change[0]){
            money -= change[0];
            coins++;
        }else{
            change.shift();
        }
    }
    return coins;
}
