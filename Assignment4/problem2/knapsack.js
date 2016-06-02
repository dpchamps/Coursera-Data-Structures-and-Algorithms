"use strict";
var readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    }),
    items = [],
    capacity,
    nItems;


rl.on('line', function(data){
    data = data.toString().trim().split(' ');
    if(!nItems){
        capacity = parseInt(data[1],10);
        nItems = parseInt(data[0],10);
    }else{
        items.push({
            'value' : parseInt(data[0], 10),
            'weight': parseInt(data[1], 10)
        });
    }

    if(nItems === items.length){
        rl.close();
        items.sort(sortKnapsack);
        var maxValue = packKnapsack(items, capacity);
        console.log(maxValue.toFixed(4));
        process.exit();
    }
});

function sortKnapsack(a,b){
    var aValUnit = a.value / a.weight,
        bValUnit = b.value / b.weight;

    if(aValUnit < bValUnit){
        return 1;
    }
    if(aValUnit > bValUnit){
        return -1;
    }

    return 0;
}
function packKnapsack(items, capacity){
    var maxValue = 0,
        itemPart;
    for(var i = 0; i < items.length; i++){
        var weight = items[i].weight,
            value = items[i].value;
        if(capacity === 0){
            return maxValue;
        }
        itemPart = Math.min(weight, capacity);
        maxValue += itemPart * (value/weight);
        capacity -= itemPart
    }
    return maxValue;
}