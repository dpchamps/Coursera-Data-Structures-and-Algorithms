"use strict";
process.stdin.resume();
process.stdin.once('data', function(data){
    data = data.toString().trim().split(' ');
    if(data.length < 2){
        error();
    }
    var a = parseInt(data[0], 10),
        b = parseInt(data[1], 10);
    if(! (checkConstraint(a) && checkConstraint(b))){
        error()
    }

    process.stdout.write((a+b).toString());
    quit();
});
function checkConstraint(n){
    return (n >= 0 && n <= 9);
}
function error(){
    //do error
    quit();
}

function quit(){
    console.log("\n");
    process.exit();
}