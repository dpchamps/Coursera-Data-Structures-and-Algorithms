"use strict";
require('es6-promise').polyfill();
var bigInt = require('big-integer');
var input = function(){
    process.stdin.resume();
    return new Promise(function(res,rej){
        process.stdin.once('data', function(data){
            data = data.toString().trim().split(' ');
            if(data.length <=0){
                process.exit();
                rej();
            }else{
                res(data);
            }
        });
    });
};
module.exports = input;