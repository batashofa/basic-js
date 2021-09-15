import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let array = [];
    for (let value of matrix.flat()) {
        if (value === '^^') {
            array.push(value)
        }
    }
    return array.length;
}
