'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (a) => {
    let mot = ''
    for (let i=2; i<a.length;i++){
        mot = mot + a[i]
    }
    return mot
}
const cutLast = (a) => {
    let mot = ''
    for (let i=0; i<a.length-2;i++){
        mot = mot + a[i]
    }
    return mot}
const cutFirstLast = (a) => {
    let mot = ''
    for (let i=2; i<a.length-2;i++){
        mot = mot + a[i]
    }
    return mot
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('Marjo'), 'rjo');
assert.strictEqual(cutFirst('ha'), '');
assert.strictEqual(cutFirst(''), '');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast('Marjo'), 'Mar');
assert.strictEqual(cutLast('ha'), '');
assert.strictEqual(cutLast(''), '');
assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast('Marjo'), 'r');
assert.strictEqual(cutFirstLast('Majo'), '');
assert.strictEqual(cutFirstLast(''), '');
// End of tests */
