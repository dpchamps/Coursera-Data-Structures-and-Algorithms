var assert = require('assert'),
	integer = require('./index');

describe('integer', function () {

	it('round', function() {
		assert.equal(integer.round(0.1234, 2), 0.12);
		assert.equal(integer.round(0.005, 2), 0.01);
		assert.equal(integer.round(1.009999, 4), 1.01);
		assert.equal(integer.round(1.00499, 2), 1);
		assert.equal(integer.round(1.00499), 1);
		assert.equal(integer.round(28973, 2), 28973);
		assert.equal(integer.round(100499, -3), 100000);
		assert.equal(integer.round(28973, -2), 29000);
		assert.equal(integer.round(28943, -2), 28900);
		assert.equal(integer.round(28973, -5), 0);
		assert.equal(integer.round(50973, -5), 100000);
	});

});