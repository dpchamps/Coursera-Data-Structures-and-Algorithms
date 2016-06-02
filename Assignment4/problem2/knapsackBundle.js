/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var items = [],
	    capacity,
	    nItems;
	process.stdin.resume();
	process.stdin.on('data', function(data){
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
	        items.sort(sortKnapsack);
	        console.log(packKnapsack(items, capacity).toFixed(4));
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

/***/ }
/******/ ]);