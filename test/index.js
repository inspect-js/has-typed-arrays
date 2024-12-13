'use strict';

var test = require('tape');
var some = require('array.prototype.some');

var hasTypedArrays = require('..');

test('export', function (t) {
	t.equal(typeof hasTypedArrays, 'function', 'export is a function');
	t.end();
});

test('Typed Arrays', function (t) {
	var anyExist = some(/** @type {import('..').TypedArrayName[]} */ [
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
	], /** @param {import('..').TypedArrayName} TA */ function (TA) {
		return typeof global[TA] === 'function';
	});

	t.equal(hasTypedArrays(), !!anyExist, 'returns boolean indicating typed array support');
	t.end();
});
