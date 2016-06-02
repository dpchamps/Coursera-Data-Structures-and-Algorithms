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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var readline = __webpack_require__(1),
	    tco = __webpack_require__(2),
	    rl = readline.createInterface({
	        input: process.stdin,
	        output: process.stdout,
	        terminal: false
	    });

	rl.on('line', function(data) {
	    data = data.toString().trim().split(' ').map(function (el) {
	        return parseInt(el, 10);
	    });
	    var pairwiseSummands = findSummands(data[0], 1);
	    console.log(pairwiseSummands.length);
	    console.log(pairwiseSummands.join(" "));
	    process.exit();
	});
	var findSummands = tco( function(k, l, summands){
	    if(typeof summands === 'undefined'){
	        summands = [];
	    }
	    if(k <= (l * 2)){
	        summands.push(k);
	        return [null, summands];
	    }else{
	        summands.push(l);
	        return [findSummands, [k-l, l+1, summands]];
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("readline");

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	"use strict";

	function tco(f) {

	    if (typeof f === 'function') {
	        var tf = function () {
	            var nf = f, na = arguments;
	            while (1) {
	                var r = nf.apply(null, na);
	                if (typeof r[0] === 'function') {
	                    if (typeof r[0].tco === 'function') {
	                        nf = r[0].tco;
	                        na = r[1];
	                    } else {
	                        return r[0].apply(null, r[1]);
	                    }
	                } else if (r[0] == null) {
	                    return r[1];
	                } else {
	                    throw new Error('tco: bad value returned');
	                }
	            }
	        };
	        tf.tco = f;
	        return tf;
	    } else {
	        throw new Error('tco() expects a function');
	    }
	}

	tco.value = function (v) {
	    return [null, v];
	};

	module.exports = tco;



/***/ }
/******/ ]);