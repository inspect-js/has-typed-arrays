'use strict';

var some = require('array.prototype.some');
var whichTypedArray = require('which-typed-array');

/** @type {import('.').TypedArrayName[]} */
var typedArrays = [
	'Float32Array',
	'Float64Array',
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'BigInt64Array',
	'BigUint64Array'
];

module.exports = function hasTypedArrays() {
	return some(typedArrays, /** @param {import('.').TypedArrayName} TA */ function (TA) {
		return !!whichTypedArray(new global[TA]());
	});
};
