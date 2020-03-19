'use strict';

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */

// Your code:
const words = (a) => {
    let phrase = []
    let mot = ''
    for (let i = 0 ; i<(a.length) ; i+=1)
        {
            if (a[i]!=' ') {
                mot = mot + (a[i])} 
            else if (i==a.length-1){
                mot = mot + (a[i])
                phrase.push(mot)}
            else if (a[i]==' '){
                phrase.push(mot)
                mot = ''
                }
            
        }
    phrase.push(mot)
    return phrase
}
// words('wol.lol lo,lol')

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof words, 'function');
assert.strictEqual(words.length, 1);
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ]);
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ]);
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ]);
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol' ]);
// End of tests */
