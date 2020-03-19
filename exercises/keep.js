'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (a) => {
    let mot = ''
    if (a==0) {return ''} else {for (let i=0; i<2;i++){
        mot = mot + a[i]
    }
    return mot}
}
const keepLast = (a) => {
    let mot = ''
    if (a==0) {return ''} else {for (let i=a.length-2; i<a.length;i++){
        mot = mot + a[i]
    }
    return mot}}
const keepFirstLast = (a) => {
    let mot = ''
    if (a==0) {return ''} else {for (let i=2; i<4;i++){
        mot = mot + a[i]
    }
    return mot}
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('Marjo'), 'Ma');
assert.strictEqual(keepFirst('ha'), 'ha');
assert.strictEqual(keepFirst(''), '');
assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast('Marjo'), 'jo');
assert.strictEqual(keepLast('ha'), 'ha');
assert.strictEqual(keepLast(''), '');
assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast('Marjo'), 'rj');
assert.strictEqual(keepFirstLast('Majo'), 'jo');
assert.strictEqual(keepFirstLast(''), '');
// End of tests */
