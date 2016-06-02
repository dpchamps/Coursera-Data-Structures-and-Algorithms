"use strict";
var readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    }),
    n, segments = [];

rl.on('line', function(data){
    data = data.toString().trim().split(' ').map(function(el){
        return parseInt(el, 10);
    });
    if(!n){
        n = data[0];
    }else{
        segments.push(data);
        if(n === segments.length){
            /*
            var startPoints = segments.map(function(el){
                    return el[0];
                }),
                endPoints = segments.map(function(el){
                    return el[1];
                });
            */
            segments.sort(sortSegments);

            var pointsObj = getPoints(segments);
            console.log(pointsObj.nPoints);
            console.log(pointsObj.points);

            process.exit();
        }
    }
});
function sortSegments(a,b){
    return a[1]-b[1];
}
function getPoints(segments){
    var points = [],
        startPoint = segments[0][0],
        endPoint = segments[0][1];

    for(var i = 0; i < segments.length; i++){
        if(typeof startPoint === "undefined"){
            if(segments[i][0] > points[points.length-1]){
                startPoint = segments[i][0];
                endPoint = segments[i][1];
            }else{
                continue;
            }
        }
        if(segments[i][1] < endPoint){
            points.push(segments[i][1]);
            startPoint = undefined;
        }
        if(segments[i][1] >= endPoint){
            if(points && endPoint === points[points.length-1]){
                startPoint = undefined;
            }else{
                points.push(endPoint);
                startPoint = undefined;
            }

        }

    }
    return {
        'nPoints' : points.length,
        'points' : points.join(" ")
    }
}