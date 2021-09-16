import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix ) {
    let res;
    let arr = matrix[0].map((val, index) => matrix.map(row => row[index]));
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                break;
            }
            sum.push(arr[i][j]);
        }
    }
    if(sum.length === 0){
        return 0;
    }
    res = sum.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    })
    return res;
}

